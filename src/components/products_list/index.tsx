'use client'
import { useState } from 'react'

import { formatDatetime } from '@/utils'
import { ProductCard } from './product_card'

type Product = {
  id: string
  ean: string
  datetime: string
  isSelected: boolean
}

type ProductWithDateTime = Product & {
  date: string
  time: string
}

const ProductsListMock: Product[] = [
  {
    id: '1',
    ean: '7891234567890',
    datetime: '2024-01-16 10:00:00',
    isSelected: false,
  },
  {
    id: '2',
    ean: '7891234567891',
    datetime: '2024-01-16 11:00:00',
    isSelected: false,
  },
  {
    id: '3',
    ean: '7891234567892',
    datetime: '2024-01-17 12:00:00',
    isSelected: true,
  },
  {
    id: '4',
    ean: '7891234567893',
    datetime: '2024-01-15 12:00:00',
    isSelected: true,
  },
]

type GroupedProducts = {
  date: string
  products: ProductWithDateTime[]
}

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>(ProductsListMock)

  const groupedProducts: GroupedProducts[] = products
    .reduce((acc, product) => {
      const { date, time } = formatDatetime(product.datetime)
      const groupIndex = acc.findIndex((group) => group.date === date)

      if (groupIndex !== -1) {
        acc[groupIndex].products.push({
          ...product,
          date,
          time,
        } as ProductWithDateTime)
      } else {
        acc.push({
          date,
          products: [{ ...product, date, time } as ProductWithDateTime],
        })
      }

      return acc
    }, [] as GroupedProducts[])
    .sort(
      (a, b) =>
        new Date(`${a.date} ${a.products[0].time}`).getTime() -
        new Date(`${b.date} ${b.products[0].time}`).getTime(),
    )

  const toggleSelect = (id: string) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isSelected: !product.isSelected }
          : product,
      ),
    )
  }

  console.log('groupedProducts', groupedProducts)

  return (
    <section className="scrollbar-hide h-full overflow-auto py-10">
      <p className="text-xl font-bold">Lista de Produtos</p>
      <div className="flex flex-col items-center justify-center">
        {groupedProducts.map((group, groupIndex) => (
          <div key={groupIndex} className="mt-5 flex w-full flex-col gap-4">
            <div className="flex items-center justify-between ">
              <p className="text-lg font-bold">{group.date}</p>
              <div className="mx-2 flex-grow border-t border-black/60" />
              <p className="text-sm opacity-60">
                {group.products.length}{' '}
                {group.products.length > 1 ? 'itens' : 'item'}
              </p>
            </div>
            {group.products.map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                ean={product.ean}
                datetime={product.datetime}
                isSelected={product.isSelected}
                setIsSelected={() => toggleSelect(product.id)}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
