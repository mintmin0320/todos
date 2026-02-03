import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

import { deleteTodos } from "@/features/todos/api/mutations/deleteTodos"
import { readTodos } from "@/features/todos/api/queries/readTodos"

export async function GET() {
  try {
    const todos = await readTodos()

    return NextResponse.json(todos)
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching todos data: " + error },
      { status: 500 },
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json()
    const ids = Array.isArray(body.ids) ? body.ids : []

    const todoIds = ids.filter(
      (id: unknown): id is number =>
        typeof id === "number" && Number.isInteger(id),
    )

    if (todoIds.length === 0) {
      return NextResponse.json({ error: "ids array required" }, { status: 400 })
    }

    await deleteTodos(todoIds)
    revalidateTag("todos")

    return NextResponse.json({ message: "Todos deleted" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting todos: " + error },
      { status: 500 },
    )
  }
}
