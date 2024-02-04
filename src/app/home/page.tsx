'use client'
import { useEffect, useState } from 'react'

import { Header, Layout, Shortcuts } from '@/components'

const Home = () => {
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

export default Home
