import Link from "next/link"

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 bg-white shadow-sm">
      <div className="flex h-full items-center justify-center">
        <Link href="/instruments" className="text-2xl font-semibold">
          todos
        </Link>
      </div>
    </header>
  )
}

export default Header
