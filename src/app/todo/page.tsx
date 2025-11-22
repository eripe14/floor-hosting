"use client";

import React, {useState, useEffect} from 'react';
import {Plus, Trash2, Edit, Save, X, Check, LucideIcon} from 'lucide-react';

const API_URL = '/api/todo';

interface Todo {
    id: string;
    task: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: Todo;
    onDelete: (id: string) => void;
    onUpdate: (id: string, updates: Partial<{ task: string; completed: boolean }>) => Promise<void>;
}

function TodoItem({todo, onDelete, onUpdate}: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.task);
    const [isLoading, setIsLoading] = useState(false);

    const handleToggleComplete = async () => {
        if (isLoading) return;
        setIsLoading(true);
        await onUpdate(todo.id, {completed: !todo.completed});
        setIsLoading(false);
    };

    const handleSaveEdit = async () => {
        if (editText.trim() === todo.task || editText.trim() === '') {
            setIsEditing(false);
            return;
        }
        if (isLoading) return;
        setIsLoading(true);
        await onUpdate(todo.id, {task: editText.trim()});
        setIsEditing(false);
        setIsLoading(false);
    };

    return (
        <article
            className={`flex items-center justify-between p-4 rounded-lg border transition duration-300 mb-2
            ${todo.completed
                ? 'border-green-600 bg-green-900/40'
                : 'border-slate-800 bg-slate-900/60 hover:border-sky-400/70'
            }`}
        >
            <div className="flex-grow min-w-0 mr-4">
                {isEditing ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSaveEdit();
                            if (e.key === 'Escape') setIsEditing(false);
                        }}
                        className="w-full bg-slate-800 text-slate-50 border-none rounded p-1 focus:ring-sky-400 focus:border-sky-400 text-sm"
                        disabled={isLoading}
                        autoFocus
                    />
                ) : (
                    <p
                        className={`text-sm md:text-base text-slate-50 cursor-pointer transition ${todo.completed ? 'line-through text-slate-400' : ''}`}
                        onClick={handleToggleComplete}
                    >
                        {todo.task}
                    </p>
                )}
            </div>

            <div className="flex space-x-2 shrink-0">
                {isEditing ? (
                    <>
                        <ActionButton
                            onClick={handleSaveEdit}
                            icon={Save}
                            color="sky"
                            disabled={isLoading}
                            title="Save changes"
                        />

                        <ActionButton
                            onClick={() => setIsEditing(false)}
                            icon={X}
                            color="slate"
                            disabled={isLoading}
                            title="Cancel editing"
                        />
                    </>
                ) : (
                    <>
                        <ActionButton
                            onClick={handleToggleComplete}
                            icon={Check}
                            color={todo.completed ? 'slate' : 'green'}
                            disabled={isLoading}
                            title={todo.completed ? "Mark as uncompleted" : "Mark as completed"}
                        />

                        <ActionButton
                            onClick={() => setIsEditing(true)}
                            icon={Edit}
                            color="sky"
                            disabled={isLoading || todo.completed}
                            title="Edit task"
                        />

                        <ActionButton
                            onClick={() => onDelete(todo.id)}
                            icon={Trash2}
                            color="red"
                            disabled={isLoading}
                            title="Delete task"
                        />
                    </>
                )}
            </div>
        </article>
    );
}

interface ActionButtonProps {
    icon: LucideIcon;
    onClick: () => void;
    color: string;
    disabled: boolean;
    title: string;
}

function ActionButton({icon: Icon, onClick, color, disabled, title}: ActionButtonProps) {
    const baseClasses = "p-2 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
    let colorClasses;

    switch (color) {
        case 'red':
            colorClasses = 'text-red-400 hover:bg-red-900/50';
            break;
        case 'green':
            colorClasses = 'text-green-400 hover:bg-green-900/50';
            break;
        case 'sky':
            colorClasses = 'text-sky-400 hover:bg-sky-900/50';
            break;
        default:
            colorClasses = 'text-slate-400 hover:bg-slate-700/50';
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            title={title}
            className={`${baseClasses} ${colorClasses}`}
        >
            <Icon size={16}/>
        </button>
    );
}

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTask, setNewTask] = useState('');
    const [isLoadingList, setIsLoadingList] = useState(true);
    const [isAddingTask, setIsAddingTask] = useState(false);

    const fetchTodos = async () => {
        setIsLoadingList(true);
        try {
            const res = await fetch(API_URL);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            const normalizedData = data.map((todo: {id: number; task: string; completed: boolean}) => ({
                ...todo,
                id: String(todo.id)
            }));
            setTodos(normalizedData);
        } catch (error) {
            console.error("Error loading tasks:", error);
            setTodos([]);
        } finally {
            setIsLoadingList(false);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleAddTodo = async (e: React.FormEvent | React.MouseEvent) => {
        e.preventDefault();
        if (newTask.trim() === '') return;

        setIsAddingTask(true);
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({task: newTask.trim()}),
            });

            if (res.ok) {
                const newTodo = await res.json();
                setTodos((prev) => [...prev, { ...newTodo, id: String(newTodo.id) }]);
                setNewTask('');
            } else {
                console.error("API error while adding:", res.statusText);
                alert('Failed to add task. Please try again.');
            }
        } catch (error) {
            console.error("Network error while adding:", error);
            alert('Connection error. Please check your server connection.');
        } finally {
            setIsAddingTask(false);
        }
    };

    const handleUpdateTodo = async (id: string, updates: Partial<{ task: string; completed: boolean }>) => {
        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updates),
            });

            if (res.ok) {
                const updatedTodo = await res.json();
                setTodos(prev => prev.map(t =>
                    t.id === id ? { ...updatedTodo, id: String(updatedTodo.id) } : t
                ));
            } else if (res.status === 404) {
                console.error(`Task with ID ${id} not found. Refreshing list...`);
                alert('This task no longer exists. Refreshing task list.');
                await fetchTodos();
            } else {
                console.error(`API error while updating task with ID ${id}:`, res.statusText);
                alert('Failed to update task.');
            }
        } catch (error) {
            console.error("Network error while updating:", error);
            alert('Connection error. Please check your server connection.');
        }
    };

    const handleDeleteTodo = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this task?')) return;

        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });

            if (res.status === 204) {
                setTodos(prev => prev.filter(t => t.id !== id));
            } else if (res.status === 404) {
                console.error(`Task with ID ${id} not found. Refreshing list...`);
                alert('This task no longer exists. Refreshing task list.');
                await fetchTodos();
            } else {
                console.error(`API error while deleting task with ID ${id}:`, res.statusText);
                alert('Failed to delete task.');
            }
        } catch (error) {
            console.error("Network error while deleting:", error);
            alert('Connection error. Please check your server connection.');
        }
    };

    const sortedTodos = [...todos].sort((a, b) => {
        return Number(a.completed) - Number(b.completed);
    });

    return (
        <section className="pt-16 md:pt-20 pb-16 md:pb-20 min-h-screen bg-slate-950">
            <div className="max-w-xl mx-auto px-5">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50 text-center mb-10">
                    Your TODO List
                </h1>

                <div className="mb-8">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && newTask.trim() !== '' && !isAddingTask) {
                                    handleAddTodo(e);
                                }
                            }}
                            placeholder="Enter new task..."
                            className="flex-grow p-3 rounded-lg bg-slate-800 text-slate-50 border border-slate-700 focus:border-sky-400 focus:ring-sky-400 transition placeholder-slate-500 text-sm"
                            disabled={isAddingTask}
                        />
                        <button
                            onClick={handleAddTodo}
                            className="px-4 py-3 rounded-lg bg-sky-400 text-slate-900 font-medium text-sm hover:bg-sky-300 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isAddingTask || newTask.trim() === ''}
                        >
                            {isAddingTask ? (
                                <span className="animate-spin h-5 w-5 border-2 border-slate-900 border-t-transparent rounded-full"></span>
                            ) : (
                                <Plus size={20}/>
                            )}
                        </button>
                    </div>
                </div>

                <div className="mt-8">
                    {isLoadingList ? (
                        <p className="text-slate-400 text-center">Loading tasks...</p>
                    ) : sortedTodos.length === 0 ? (
                        <p className="text-slate-400 text-center p-8 border border-slate-800 rounded-xl">
                            No tasks to display. Add your first task above!
                        </p>
                    ) : (
                        <div>
                            {sortedTodos.map((todo) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    onDelete={handleDeleteTodo}
                                    onUpdate={handleUpdateTodo}
                                />
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}