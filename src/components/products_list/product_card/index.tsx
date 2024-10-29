import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { Clock, Trash2 } from 'lucide-react'

import { Alert, Checkbox } from '@/components'
import { formatDatetime } from '@/utils'

type ProductCardProps = {
  id: string
  ean: string
  datetime: string
  isSelected: boolean
  setIsSelected: (isSelected: boolean) => void
  handleDeleteItem: (id: string) => void
}

export const ProductCard = ({
  id,
  ean,
  datetime,
  isSelected = false,
  setIsSelected,
  handleDeleteItem,
}: ProductCardProps) => {
  const [isAct, setIsAct] = useState(0)
  const [showAct, setShowAct] = useState(true)
  const [isOpenAlert, setIsOpenAlert] = useState(false)

  const { time } = formatDatetime(datetime)

  const variantShowAct = {
    hidden: {
      opacity: 0,
      width: 0,
    },
    show: {
      opacity: 1,
      width: 'auto',
    },
  }

  const dragAnimation = {
    show: {
      translateX: 0,
    },
    hidden: {
      translateX: -60,
    },
  }

  console.log('showAct', showAct)

  useEffect(() => {
    setShowAct(!showAct)
    // eslint-disable-next-line
  }, [isAct])

  return (
    <motion.div
      key={`product_card_${id}_${ean}_${datetime}`}
      className="flex min-h-[80px] w-full justify-between rounded-2xl px-4 odd:bg-slate-300 even:bg-slate-200"
      drag="x"
      dragConstraints={{ left: -10, right: 0, top: 0, bottom: 0 }}
      variants={dragAnimation}
      animate={showAct ? 'hidden' : 'show'}
      onDirectionLock={(axis) => console.log(axis)}
      onDragEnd={(event, info) => setIsAct(info.point.x)}
    >
      <div className="flex items-center gap-4">
        <Checkbox checked={isSelected} setChecked={setIsSelected} />
        <p className="text-lg font-bold">{ean}</p>
      </div>

      <div className="flex items-center gap-1">
        <Clock size={16} className="opacity-60" />
        <p className="opacity-70">{time}</p>
      </div>
      <motion.div
        className="absolute right-0 top-0 flex min-h-[80px] w-full flex-row-reverse overflow-hidden rounded-xl opacity-0"
        variants={variantShowAct}
        animate={showAct ? 'show' : 'hidden'}
      >
        <motion.button
          type="button"
          className="flex h-20 w-20 items-center justify-center bg-red-500"
          onClick={() => setIsOpenAlert(true)}
        >
          <Trash2 size={24} color="white" />
        </motion.button>
      </motion.div>
      <Alert
        title="Apagar"
        message="Tem certeza que deseja excluir esse item?"
        isOpen={isOpenAlert}
        handleConfirm={() => {
          handleDeleteItem(id)
          setShowAct(!showAct)
          setIsOpenAlert(false)
        }}
        handleCancel={() => {
          setShowAct(!showAct)
          setIsOpenAlert(false)
        }}
      />
    </motion.div>
  )
}
