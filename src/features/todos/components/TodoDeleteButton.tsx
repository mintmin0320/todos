"use client"

import { useRouter } from "next/navigation"

import { CloseIcon } from "@/shared/assets/icons/CloseIcon"

import { fetchDeleteTodos } from "../api/mutations/fetchDeleteTodos"

type Props = { id: number }

export default function TodoDeleteButton({ id }: Props) {
  const router = useRouter()

  async function handleDelete() {
    const success = await fetchDeleteTodos([id])

    if (success) router.refresh()
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
