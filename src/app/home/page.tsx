'use client'
import { useEffect, useState } from 'react'

import { Header, Layout, Shortcuts } from '@/components'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Layout hasMenuBottom>
      <Header />
      <Shortcuts />
    </Layout>
  )
}
