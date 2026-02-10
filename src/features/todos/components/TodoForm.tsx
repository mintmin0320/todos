"use client"

import { useRef } from "react"

import { addTodoAction } from "../actions/addTodoAction"

export default function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const content = inputRef.current?.value

    if (!content) {
      return
    }

    const result = await addTodoAction(content)

    if (result.success) {
      inputRef.current!.value = ""
    } else if (result.error) {
      alert(result.error)
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
