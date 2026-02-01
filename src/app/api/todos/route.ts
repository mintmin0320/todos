import { NextResponse } from "next/server"

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
