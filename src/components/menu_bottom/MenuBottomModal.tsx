import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

interface Props {
  title?: string
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  hasCancel?: boolean
  onCancel?: () => void
  noPadding?: boolean
}

export function MenuBottomModal({
  title,
  children,
  isOpen,
  setIsOpen,
  hasCancel = true,
  noPadding = true,
  onCancel = () => {
    setIsOpen(false)
  },
}: Props) {
  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed z-[60] flex h-screen w-screen md:items-center md:justify-center">
            <motion.div
              className="absolute bottom-0 z-[60] flex h-screen w-full flex-col justify-end px-4 md:top-0 md:max-w-3xl md:items-center md:justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="fixed inset-0 bg-neutral-900/80 backdrop-blur-lg"
                onClick={() => handleCloseModal()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              ></motion.div>
              <motion.div
                className="relative w-full rounded-[32px] bg-neutral-800 pt-4"
                initial={{
                  opacity: 0,
                  top: '20%',
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  top: 0,
                  scale: 1,
                  transition: {
                    ease: 'easeOut',
                    duration: 0.3,
                    delay: 0.3,
                  },
                }}
                exit={{
                  opacity: 0,
                  top: '80%',
                  transition: {
                    ease: 'easeIn',
                    duration: 0.15,
                  },
                }}
              >
                <div className="relative mb-2 flex w-full flex-row items-center justify-center">
                  <div className="flex items-center justify-center">
                    <h3 className="text-lg font-semibold text-white">
                      {title}
                    </h3>
                  </div>
                  <motion.button
                    className="stroke-3 absolute right-4 hidden items-center md:flex"
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => handleCloseModal()}
                  >
                    <X size={22} className="text-white" />
                  </motion.button>
                </div>
                <div
                  className={`h-full text-white ${noPadding ? 'p-0' : 'pl-4'}`}
                >
                  {children}
                </div>
              </motion.div>
              <motion.div
                className="relative w-full py-3 md:hidden"
                initial={{
                  opacity: 0,
                  top: '20%',
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  top: 0,
                  scale: 1,
                  transition: {
                    ease: 'easeOut',
                    duration: 0.3,
                    delay: 0.3,
                  },
                }}
                exit={{
                  opacity: 0,
                  top: '80%',
                  transition: {
                    ease: 'easeIn',
                    duration: 0.15,
                  },
                }}
              >
                {hasCancel && (
                  <motion.button
                    type="button"
                    onClick={() => onCancel()}
                    className="text-default-100 w-full rounded-[32px] bg-neutral-800 py-3"
                    whileTap={{ scale: 0.9 }}
                  >
                    Cancelar
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
