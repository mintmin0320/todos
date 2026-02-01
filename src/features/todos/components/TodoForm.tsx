"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"

import { fetchAddTodos } from "../api/mutations/fetch-add-todos"

export default function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const content = inputRef.current?.value?.trim()

    if (!content) {
      alert("할 일을 입력해주세요.")

      return
    }

    const success = await fetchAddTodos(content)

    if (success) {
      inputRef.current!.value = ""
      router.refresh()
    }
  }

  return (
    <form className="relative z-10" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="What needs to be done?"
        className="w-full border border-gray-200 bg-white px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  )
}
