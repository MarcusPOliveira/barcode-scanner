

import { ListEnd } from 'lucide-react'

import { Button, Header, Layout, ProductsList } from '@/components'

const ListaDeProdutos = () => {

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
