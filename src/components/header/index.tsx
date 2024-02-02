import { UserAvatar } from '..'

export const Header = () => {
  return (
    <header className="flex min-h-20 w-full">
      <div className="flex w-full items-center justify-between gap-4 ">
        <div className="flex flex-col">
          <p className="text-2xl font-bold">Olá! 👋🏻</p>
          <p className="text-base ">
            Bem-vindo(a) ao <span className="font-bold">Barcode Scanner!</span>
          </p>
        </div>
        <UserAvatar />
      </div>
    </header>
  )
}
