export async function fetchDeleteTodos(ids: number[]): Promise<boolean> {
  if (ids.length === 0) return true

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids }),
  })

  return res.ok
}
