import { createClient } from "@/shared/utils/supabase/server"

import { Todo } from "../api/types/todos.types"

export async function readTodos(): Promise<Todo[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("todos")
    .select()
    .order("id", { ascending: true })

  if (error) throw error

  return data ?? []
}
