import { ElementType } from 'react'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface Props {
  icon: ElementType
  action?: string | (() => void)
  active?: boolean
  badge?: boolean
}

export function MenuBottomIcon({
  icon: Icon,
  action,
  active = false,
  badge = false,
}: Props) {
  const router = useRouter()

  const redirect = () => {
    if (typeof action === 'string') {
      router.push(action)
    } else if (typeof action === 'function') {
      action()
    }
  }

  return (
    <motion.button
      onClick={redirect}
      className="relative h-20 min-w-[50px] cursor-pointer"
    >
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute top-16 h-1 min-w-[50px] bg-emerald-500"
        ></motion.div>
      )}
      <motion.li
        className={`${
          active ? 'text-emerald-400' : 'text-neutral-400'
        } flex h-full w-full cursor-pointer items-center justify-center text-3xl drop-shadow-xl transition-all`}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.3, ease: 'easeIn' }}
      >
        {badge && (
          <div className="bg-primary-500 absolute right-1 top-4 h-2 w-2 rounded-full" />
        )}
        <Icon />
      </motion.li>
    </motion.button>
  )
}
