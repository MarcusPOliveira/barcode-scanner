'use client'
import { motion } from 'framer-motion'

type CheckboxProps = {
  checked?: boolean
  setChecked?: (checked: boolean) => void
}

export const Checkbox = ({ checked, setChecked }: CheckboxProps) => {
  return (
    <motion.label className="flex items-center" whileTap={{ scale: 0.85 }}>
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={() => setChecked && setChecked(!checked)}
      />
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full bg-white p-1`}
      >
        {checked ? (
          <motion.span
            className="h-6 w-6 rounded-full bg-emerald-500"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        ) : null}
      </span>
    </motion.label>
  )
}
