import { Suspense } from "react"

import { fetchTodos } from "@/features/todos/api/queries/fetch-todos"
import type { Todo } from "@/features/todos/api/queries/get-todos"
import TodoList from "@/features/todos/components/TodoList"
import TodoListSkeleton from "@/features/todos/components/TodoListSkeleton"
import { AsyncBoundary } from "@/shared/components/AsyncBoundary"

export default function Home() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">할 일 목록</h1>
        <p className="text-sm leading-relaxed">
          간단한 할 일 목록을 만들고 관리해 보세요.
        </p>
      </div>

      <Suspense fallback={<TodoListSkeleton />}>
        <AsyncBoundary getData={fetchTodos}>
          {(todos: Todo[]) => <TodoList todos={todos} />}
        </AsyncBoundary>
      </Suspense>
    </main>
  )
}
