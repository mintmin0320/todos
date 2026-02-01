import type { Todo } from "../api/queries/get-todos"

type Props = { todos: Todo[] }

export default function TodoList({ todos }: Props) {
  if (todos.length === 0) {
    return <p className="text-sm text-gray-500">할 일이 없습니다.</p>
  }
  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="rounded-md border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800"
        >
          <span className="text-sm">id: {todo.id}</span>
          <span className="ml-2 text-xs text-gray-500">{todo.created_at}</span>
        </li>
      ))}
    </ul>
  )
}
