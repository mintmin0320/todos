import { createClient } from "@/shared/utils/supabase/server"

export async function deleteTodo(ids: number[]): Promise<void> {
  if (ids.length === 0) return

  const supabase = await createClient()
  const { error } = await supabase.from("todos").delete().in("id", ids)

  if (error) throw error
}
