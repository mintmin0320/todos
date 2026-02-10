"use server"

import { revalidateTag } from "next/cache"

import { addTodo } from "../repositories/add"

export async function addTodoAction(
  content: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    const trimmedContent = content.trim()

    if (!trimmedContent) {
      return { success: false, error: "할 일을 입력해주세요." }
    }

    const success = await addTodo(trimmedContent)

    if (!success) {
      return { success: false, error: "할 일 추가에 실패했습니다." }
    }

    revalidateTag("todos")
    return { success: true }
  } catch (error) {
    console.error("Error adding todo:", error)
    return { success: false, error: "할 일 추가에 실패했습니다." }
  }
}
