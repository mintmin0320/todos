import { createClient } from "@/shared/utils/supabase/server"

export async function addTodo(content: string): Promise<boolean> {
  try {
    const supabase = await createClient()
    const { error } = await supabase.from("todos").insert({ content })
    if (error) return false
    return true
  } catch {
    return false
  }
}
