'use client'
import { useState } from 'react'

import { BarCodeScanner, Layout } from '@/components'

const Escanear = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [result, setResult] = useState<string>('')

  const handleScanFailure = (error: string) => {
    console.log('error', error)
  }

  const handleScanSuccess = (decodedText: string) => {
    console.log('decodedText', decodedText)
    setResult(decodedText)
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
