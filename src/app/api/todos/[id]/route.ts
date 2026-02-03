import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

import { updateTodo } from "@/features/todos/api/mutations/updateTodo"

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const todoId = Number(id)

    if (Number.isNaN(todoId)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 })
    }

    const body = await request.json()
    const completed =
      body.completed === true || body.completed === false
        ? body.completed
        : undefined

    if (completed === undefined) {
      return NextResponse.json(
        { error: "completed is required" },
        { status: 400 },
      )
    }

    await updateTodo(todoId, completed)
    revalidateTag("todos")

    return NextResponse.json({ message: "Todo updated" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating todo: " + error },
      { status: 500 },
    )
  }
}
