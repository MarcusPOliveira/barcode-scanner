'use client'
import { useState } from 'react'

import { BarCodeScanner, Layout } from '@/components'

const Escanear = () => {
  const [result, setResult] = useState<string>('')

  const handleScanFailure = (error: string) => {
    console.log('error', error)
  }

  const handleScanSuccess = (decodedText: string) => {
    console.log('decodedText', decodedText)
    setResult(decodedText)
  }

  return (
    <Layout hasMenuBottom>
      <div>Escanear</div>
      <BarCodeScanner
        onScanFailure={handleScanFailure}
        onScanSuccess={handleScanSuccess}
      />
      <p>Result: </p>
      <p>{result}</p>
    </Layout>
  )
}

export default Escanear
