"use server"

import { revalidateTag } from "next/cache"

import { deleteTodo } from "../repositories/delete"

export async function deleteTodoAction(
  ids: number[],
): Promise<{ success: boolean; error?: string }> {
  try {
    if (ids.length === 0) {
      return { success: false, error: "삭제할 할 일이 없습니다." }
    }

    await deleteTodo(ids)
    revalidateTag("todos")
    return { success: true }
  } catch (error) {
    console.error("Error deleting todo:", error)
    return { success: false, error: "할 일 삭제에 실패했습니다." }
  }
}
