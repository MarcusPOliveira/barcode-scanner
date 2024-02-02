import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container fixed inset-0 flex h-screen w-screen flex-col overflow-hidden">
      <main className="h-full w-full py-4">{children}</main>
    </div>
  )
}
