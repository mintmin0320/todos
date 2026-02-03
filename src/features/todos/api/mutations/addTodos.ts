import { createClient } from "@/shared/utils/supabase/server"

export async function addTodo(content: string): Promise<void> {
  const supabase = await createClient()
  const { error } = await supabase.from("todos").insert({ content })

  if (error) throw error
}
