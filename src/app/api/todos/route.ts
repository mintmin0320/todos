import { NextResponse } from "next/server"

import { getTodos } from "@/features/todos/api/queries/get-todos"

export async function GET() {
  try {
    const todos = await getTodos()

    return NextResponse.json(todos)
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching todos data: " + error },
      { status: 500 },
    )
  }
}
