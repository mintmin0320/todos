export async function fetchUpdateTodoComplete(
  id: number,
  completed: boolean,
): Promise<boolean> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/todos/${id}`
  const res = await fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  })
  if (!res.ok) {
    return false
  }
  return true
}
