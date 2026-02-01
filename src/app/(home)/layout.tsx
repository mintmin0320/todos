type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">할 일 목록</h1>
        <p className="text-sm leading-relaxed">
          간단한 할 일 목록을 만들고 관리해 보세요. 위의{" "}
          <strong className="font-semibold">todos</strong>
          에서 목록을 확인할 수 있습니다.
        </p>
      </div>
      {children}
    </main>
  )
}

export default Layout
