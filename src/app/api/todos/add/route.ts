import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

import { addTodo } from "@/features/todos/repositories/add"

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

    const success = await addTodo(content)
    if (!success) {
      return NextResponse.json(
        { message: "Error adding todo" },
        { status: 500 },
      )
    }
    revalidateTag("todos")
    return NextResponse.json({ message: "Todo added" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding todo: " + error },
      { status: 500 },
    )
  }
}
