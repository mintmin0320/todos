export async function fetchAddTodos(content: string): Promise<boolean> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  })

  return res.ok
}
