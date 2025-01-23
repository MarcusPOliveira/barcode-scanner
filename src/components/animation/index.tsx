'use client'
import Lottie from 'lottie-react'

interface Props {
  animationData: Object
}

export const Animation = ({ animationData }: Props) => {
  return <Lottie animationData={animationData} loop />
}
