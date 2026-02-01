import type { Tables } from "types_db"

import { createClient } from "@/shared/lib/supabase/server"

export type Todo = Tables<"todos">

export async function readTodos(): Promise<Todo[]> {
  const supabase = await createClient()
  const { data, error } = await supabase.from("todos").select()

  if (error) throw error

  return data ?? []
}
