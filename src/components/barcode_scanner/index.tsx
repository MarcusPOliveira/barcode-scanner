/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useEffect } from 'react'

import { Flashlight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useTorch } from 'react-barcode-scanner'

interface BarcodeScannerProps {
  onScanSuccess?: (decodedText: string) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onScanFailure?: (error: any) => void
}

const BarcodeScanner = dynamic(
  () => {
    import('react-barcode-scanner/polyfill')
    return import('react-barcode-scanner').then((mod) => mod.BarcodeScanner)
  },
  { ssr: false },
)

export const BarCodeScanner = ({
  onScanSuccess,
  onScanFailure,
}: BarcodeScannerProps) => {
  const [isSupportTorch, isOpen, onTorchSwitch] = useTorch()

  console.log('isSupportTorch', isSupportTorch)
  console.log('isOpen', isOpen)
  console.log('onTorchSwitch', onTorchSwitch)

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <BarcodeScanner
        options={{
          formats: [
            // 'code_128',
            // 'code_39',
            'ean_13',
            // 'ean_8',
            // 'upc_a',
            // 'upc_e',
            'itf',
            // 'codabar',
            // 'code_93',
          ],
          delay: 500,
        }}
        onCapture={(result) => {
          console.log('format', result.format)
          console.log('result', result)
          const audio = new Audio('/sounds/beep.mp3')
          audio.play()
          if (onScanSuccess) onScanSuccess(result.rawValue)
        }}
        onError={(error) => {
          console.log(`onError: ${error}'`)
          onScanFailure && onScanFailure(error)
        }}
      />
      {isSupportTorch ? (
        <button
          type="button"
          className="fixed bottom-32 right-5 z-50 rounded-full bg-slate-200 p-4"
          onClick={onTorchSwitch}
        >
          <Flashlight />
        </button>
      ) : null}
    </div>
  )
}
