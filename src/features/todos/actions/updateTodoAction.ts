"use server"

import { revalidateTag } from "next/cache"

import { updateTodo } from "../repositories/update"

export async function updateTodoAction(
  id: number,
  completed: boolean,
): Promise<{ success: boolean; error?: string }> {
  try {
    await updateTodo(id, completed)
    revalidateTag("todos")
    return { success: true }
  } catch (error) {
    console.error("Error updating todo:", error)
    return { success: false, error: "할 일 업데이트에 실패했습니다." }
  }
}
