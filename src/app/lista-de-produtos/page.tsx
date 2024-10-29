'use client'
import { useEffect, useState } from 'react'

import { ListEnd } from 'lucide-react'

import { Button, Header, Layout, ProductsList } from '@/components'

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
      <Button className="mt-4 w-full bg-emerald-400 font-medium text-zinc-800">
        <ListEnd />
        Adicionar
      </Button>
    </Layout>
  )
}

export default ListaDeProdutos
