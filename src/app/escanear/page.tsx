'use client'
import { useState } from 'react'

import { BarCodeScanner, Layout } from '@/components'

const Escanear = () => {
  const [result, setResult] = useState('')
  const [isOpenScanModal, setIsOpenScanModal] = useState(false)

  const handleScanFailure = (error: string) => {
    console.log('error', error)
  }

  const handleScanSuccess = (decodedText: string) => {
    console.log('decodedText', decodedText)
    setResult(decodedText)
    setIsOpenScanModal(true)
  }

  return (
    <Layout hasMenuBottom noPadding>
      <BarCodeScanner
        onScanFailure={handleScanFailure}
        onScanSuccess={handleScanSuccess}
      />
    </Layout>
  )
}

export default Escanear
