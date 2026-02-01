import type { Metadata } from "next"

import Header from "@/shared/components/Header"

import "./globals.css"

export const metadata: Metadata = {
  title: "todo list",
  description: "todo list",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <section className="pt-32">{children}</section>
      </body>
    </html>
  )
}
