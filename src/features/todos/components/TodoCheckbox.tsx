"use client"

import { useRouter } from "next/navigation"

import { CheckIcon } from "@/shared/assets/icons/CheckIcon"
import { cn } from "@/shared/utils/twMerge"

import { fetchUpdateTodoComplete } from "../api/mutations/fetchUpdateTodoComplete"

type Props = { id: number; completed: boolean }

export default function TodoCheckbox({ id, completed }: Props) {
  const router = useRouter()

  async function handleToggle() {
    const nextCompleted = !completed
    const success = await fetchUpdateTodoComplete(id, nextCompleted)

    if (success) router.refresh()
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
