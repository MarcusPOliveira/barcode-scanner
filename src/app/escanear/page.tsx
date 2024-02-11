'use client'
import { BarCodeScanner, Layout } from '@/components'

const Escanear = () => {
  return (
    <Layout hasMenuBottom>
      <div>Escanear</div>
      <BarCodeScanner />
    </Layout>
  )
}

export default Escanear
