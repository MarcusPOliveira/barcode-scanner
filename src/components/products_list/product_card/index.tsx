import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

import { Checkbox } from '@/components'
import { formatDatetime } from '@/utils'

type ProductCardProps = {
  id: string
  ean: string
  datetime: string
  isSelected: boolean
  setIsSelected: (isSelected: boolean) => void
}

export const ProductCard = ({
  id,
  ean,
  datetime,
  isSelected = false,
  setIsSelected,
}: ProductCardProps) => {
  const { time } = formatDatetime(datetime)

  return (
    <div
      key={`product_card_${id}_${ean}_${datetime}`}
      className="flex min-h-[80px] w-full justify-between rounded-2xl px-4 odd:bg-slate-100 even:bg-slate-200"
    >
      <div className="flex items-center gap-4">
        <Checkbox checked={isSelected} setChecked={setIsSelected} />
        <p className="text-lg font-bold">{ean}</p>
      </div>

      <div className="flex items-center gap-1">
        <Clock size={16} className="opacity-60" />
        <p className="opacity-70">{time}</p>
      </div>
    </div>
  )
}
