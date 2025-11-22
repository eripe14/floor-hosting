import {NextRequest, NextResponse} from "next/server";
import {db} from "@/../lib/db";

export async function GET() {
    const todos = db.getTodos();
    return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
    try {
        const { task } = await request.json();

        if (!task || typeof task !== 'string') {
            return NextResponse.json({ message: "Incorrect data. The 'task' field is required." }, { status: 400 });
        }

        const newTodo = db.addTodo(task);
        return NextResponse.json(newTodo, { status: 201 });
    } catch {
        return NextResponse.json({ message: "errorCreatingTheTask" }, { status: 500 });
    }
}