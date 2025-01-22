'use client'
import { ReactNode } from 'react'

import { Home, Settings, ScanBarcode, ListEnd, CheckCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { MenuBottom } from '../menu_bottom'

type LayoutProps = {
  children: ReactNode
  hasMenuBottom?: boolean
  noPadding?: boolean
}

export const Layout = ({
  children,
  hasMenuBottom = false,
  noPadding = false,
}: LayoutProps) => {
  const param = usePathname()

  return (
    <div className="container fixed inset-0 flex h-screen w-screen flex-col overflow-hidden">
      <main className={`h-full w-full ${noPadding ? '' : 'px-6 pb-40 pt-4'}`}>
        {children}
      </main>
      {hasMenuBottom && (
        <MenuBottom.Root>
          <MenuBottom.Icon
            icon={Home}
            action={'/home'}
            active={param === '/home'}
          />
          <MenuBottom.Icon
            icon={ListEnd}
            action={'/lista-de-produtos'}
            active={param === '/lista-de-produtos'}
          />
          <MenuBottom.Icon
            icon={ScanBarcode}
            action={'/escanear'}
            active={param === '/escanear'}
          />
          <MenuBottom.Icon
            icon={CheckCircle}
            action={'/finalizados'}
            active={param === '/finalizados'}
          />
          <MenuBottom.Icon
            icon={Settings}
            action={'/configuracoes'}
            active={param === '/configuracoes'}
          />
        </MenuBottom.Root>
      )}
    </div>
  )
}
