const todos = [
    {
        id: 1,
        task: "Example task",
        completed: true
    }
]

let nextId = 2;

export const db = {
    getTodos: () => todos,

    addTodo: (task: string) =>{
        const newTodo = {
            id: nextId++,
            task,
            completed: false
        };
        todos.push(newTodo);
        return newTodo;
    },

    updateTodo: (id: number, updates: Partial<{ task: string; completed: boolean }>) => {
        const index = todos.findIndex(t => t.id === id);
        if (index === -1) return null;

        todos[index] = { ...todos[index], ...updates };
        return todos[index];
    },

    deleteTodo: (id: number) => {
        const index = todos.findIndex(t => t.id === id);

        if (index === -1) {
            return false;
        }

        todos.splice(index, 1);

        return true;
    }
}