import Image from 'next/image'

export const UserAvatar = () => {
  return (
    <div className="h-16 w-16 rounded-xl">
      <Image
        src="https://github.com/MarcusPOliveira.png"
        alt="profile"
        width={64}
        height={64}
        className="h-full w-full rounded-xl object-cover"
      />
    </div>
  )
}
