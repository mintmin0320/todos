type Props<T> = {
  getData: () => Promise<T>
  children: (data: T) => React.ReactNode
}

export async function AsyncBoundary<T>({ getData, children }: Props<T>) {
  const data = await getData()

  return <>{children(data)}</>
}
