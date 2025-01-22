'use client'
import React, { ElementType } from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'

type ShortcutCardProps = {
  icon: ElementType
  iconColor: string
  backgroundColor: string
  title: string
  counterLabel: string
  pathname?: string
}

export const ShortcurtCard = ({
  icon: Icon,
  iconColor,
  backgroundColor,
  title,
  counterLabel,
  pathname,
}: ShortcutCardProps) => {
  return (
    <Link href={pathname ?? ''}>
      <motion.div
        className="flex min-h-44 min-w-40 flex-col items-center justify-center gap-2 rounded-2xl bg-slate-100"
        whileTap={{ scale: 0.9 }}
      >
        <div className={`rounded-2xl p-2 ${backgroundColor}`}>
          <Icon size={36} className={iconColor} />
        </div>
        <p className="text-lg font-medium">{title}</p>
        <p className="text-base text-zinc-400">{counterLabel}</p>
      </motion.div>
    </Link>
  )
}
