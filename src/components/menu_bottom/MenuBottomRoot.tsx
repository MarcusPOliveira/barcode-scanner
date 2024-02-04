import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  hasActionBottom?: boolean
}

export function MenuBottomRoot({ children }: Props) {
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full">
      <div className="w-full md:m-auto md:max-w-xl">
        {/* <div className="relative h-1 w-full rounded-bl-2xl rounded-br-2xl bg-[#FFF] md:mx-auto md:w-[calc(100%-11px)] md:rounded-full" /> */}

        <ul className="backdrop-brightness-60 flex h-24 w-full items-center justify-between rounded-tl-[40px] rounded-tr-[40px] bg-white/95 px-2 pb-4 shadow-[0px_-7px_104px_-20px_#000000] md:rounded-2xl">
          {children}
        </ul>
      </div>
    </div>
  )
}
