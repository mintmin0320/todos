import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

import { addTodo } from "@/features/todos/api/mutations/addTodos"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const content = body.content?.trim()

    if (!content) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 },
      )
    }

    await addTodo(content)
    revalidateTag("todos")

    return NextResponse.json({ message: "Todo added" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding todo: " + error },
      { status: 500 },
    )
  }
}
