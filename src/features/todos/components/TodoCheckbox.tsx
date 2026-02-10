"use client"

import { CheckIcon } from "@/shared/assets/icons/CheckIcon"
import { cn } from "@/shared/utils/twMerge"

import { updateTodoAction } from "../actions/updateTodoAction"

type Props = { id: number; completed: boolean }

export default function TodoCheckbox({ id, completed }: Props) {
  async function handleToggle() {
    const nextCompleted = !completed
    await updateTodoAction(id, nextCompleted)
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
        {
          "border-green-500 bg-green-50 dark:bg-green-950": completed,
          "border-gray-300 hover:border-gray-400": !completed,
        },
      )}
    >
      {completed && <CheckIcon className="text-green-600" />}
    </button>
  )
}
