'use client'
import { useEffect, useState } from 'react'

import { Header, Layout, ProductsList } from '@/components'

const ListaDeProdutos = () => {
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
      <ProductsList />
    </Layout>
  )
}

export default ListaDeProdutos
