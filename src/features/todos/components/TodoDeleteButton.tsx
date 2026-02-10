"use client"

import { CloseIcon } from "@/shared/assets/icons/CloseIcon"

import { deleteTodoAction } from "../actions/deleteTodoAction"

type Props = { id: number }

export default function TodoDeleteButton({ id }: Props) {
  async function handleDelete() {
    await deleteTodoAction([id])
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="rounded p-1 text-gray-400 transition-colors"
    >
      <CloseIcon />
    </button>
  )
}
