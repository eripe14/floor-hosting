import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/../lib/db';

function getTodoId(id: string | undefined): { id: number; error: false } | { id: undefined; error: true; message: string } {
    if (!id) {
        return { id: undefined, error: true, message: "Missing ID parameter." };
    }

    const cleanIdString = id.replace(/\D/g, '');
    const parsedId = parseInt(cleanIdString, 10);

    if (isNaN(parsedId) || cleanIdString === '') {
        return { id: undefined, error: true, message: "Invalid ID. ID must be a number." };
    }
    return { id: parsedId, error: false };
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const result = getTodoId(id);

    if (result.error) {
        return NextResponse.json({ message: result.message }, { status: 400 });
    }

    const todo = db.getTodos().find(t => t.id === result.id);

    if (!todo) {
        return NextResponse.json(
            { message: `Task with id equal to ${result.id} not found.` },
            { status: 404 }
        );
    }

    return NextResponse.json(todo, { status: 200 });
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const result = getTodoId(id);

    if (result.error) {
        return NextResponse.json({ message: result.message }, { status: 400 });
    }

    try {
        const updates = await request.json();
        delete updates.id;

        const updatedTodo = db.updateTodo(result.id, updates);

        if (!updatedTodo) {
            return NextResponse.json(
                { message: `Task with id equal to ${result.id} not found.` },
                { status: 404 }
            );
        }

        return NextResponse.json(updatedTodo, { status: 200 });
    } catch (err) {
        return NextResponse.json(
            { message: "Error while updating task" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id: idString } = await params;
    const idToDelete = parseInt(idString, 10);

    if (isNaN(idToDelete) || !idString || idString.trim() === '') {
        return NextResponse.json(
            { message: "Invalid ID. ID must be a number." },
            { status: 400 }
        );
    }

    try {
        const deleted = db.deleteTodo(idToDelete);

        if (!deleted) {
            return NextResponse.json(
                { message: `Task with id equal to ${idToDelete} not found.` },
                { status: 404 }
            );
        }

        return new NextResponse(null, { status: 204 });

    } catch (error) {
        return NextResponse.json(
            { message: "Internal Server Error during task deletion. Check server console for details." },
            { status: 500 }
        );
    }
}