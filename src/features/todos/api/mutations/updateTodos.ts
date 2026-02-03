import { createClient } from "@/shared/utils/supabase/server"

export async function updateTodos(
  id: number,
  completed: boolean,
): Promise<void> {
  const supabase = await createClient()
  const { error } = await supabase
    .from("todos")
    .update({ completed })
    .eq("id", id)

  if (error) throw error
}
