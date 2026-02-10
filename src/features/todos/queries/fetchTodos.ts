import type { Todo } from "../types/todos.types"

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`, {
    cache: "force-cache",
    next: { tags: ["todos"] },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch todos: ${res.status}`)
  }

  return res.json()
}
