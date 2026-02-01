import type { Todo } from "./get-todos"

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`)

  if (!res.ok) {
    throw new Error(`Failed to fetch todos: ${res.status}`)
  }

  return res.json()
}
