import { cn } from "@/shared/utils/twMerge"

import type { Todo } from "../api/types/todos.types"

import TodoCheckbox from "./TodoCheckbox"
import TodoDeleteButton from "./TodoDeleteButton"

type Props = { todos: Todo[] }

export default function TodoList({ todos }: Props) {
  if (todos.length === 0) {
    return <p className="text-sm text-gray-500">할 일이 없습니다.</p>
  }

  return (
    <ul className="flex flex-col">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="group flex items-center justify-between gap-3 border border-t-0 border-gray-200 bg-white px-4 py-3"
        >
          <div className="flex items-center gap-4">
            <TodoCheckbox id={todo.id} completed={todo.completed} />
            <span
              className={cn("text-sm", {
                "text-gray-500 line-through": todo.completed,
              })}
            >
              {todo.content}
            </span>
          </div>
          <div className="invisible group-hover:visible">
            <TodoDeleteButton id={todo.id} />
          </div>
        </li>
      ))}
    </ul>
  )
}
