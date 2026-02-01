export default function TodoListSkeleton() {
  return (
    <ul className="flex flex-col gap-2">
      {[1, 2, 3].map((i) => (
        <li
          key={i}
          className="h-12 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"
        />
      ))}
    </ul>
  )
}
