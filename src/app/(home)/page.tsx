import { Suspense } from "react"

import { fetchTodos } from "@/features/todos/api/queries/fetchTodos"
import type { Todo } from "@/features/todos/api/types/todos.types"
import TodoForm from "@/features/todos/components/TodoForm"
import TodoList from "@/features/todos/components/TodoList"
import TodoListSkeleton from "@/features/todos/components/TodoListSkeleton"
import { AsyncBoundary } from "@/shared/components/AsyncBoundary"

export default function Home() {
  return (
    <main className="mx-auto flex max-w-lg flex-col gap-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">할 일 목록</h1>
        <p className="text-sm leading-relaxed">
          간단한 할 일 목록을 만들고 관리해 보세요.
        </p>
      </div>

      <div>
        <TodoForm />
        <Suspense fallback={<TodoListSkeleton />}>
          <AsyncBoundary getData={fetchTodos}>
            {(todos: Todo[]) => <TodoList todos={todos} />}
          </AsyncBoundary>
        </Suspense>
      </div>
    </main>
  )
}
