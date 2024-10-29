/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useEffect } from 'react'

import dynamic from 'next/dynamic'
import { useTorch } from 'react-barcode-scanner'

interface BarcodeScannerProps {
  onScanSuccess?: (decodedText: string) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onScanFailure?: (error: any) => void
  onTorchSupportChange?: (isSupported: boolean) => void
  onTorchSwitch?: () => void
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
  onTorchSupportChange,
  onTorchSwitch,
}: BarcodeScannerProps) => {
  const [isSupportTorch, isOpen, internalOnTorchSwitch] = useTorch()

  useEffect(() => {
    if (onTorchSupportChange) {
      onTorchSupportChange(isSupportTorch)
    }
  }, [isSupportTorch, onTorchSupportChange])

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
      {/* {isSupportTorch ? (
        <button className="bg-red-500 mt-32" onClick={onTorchSwitch}>
          Switch Torch
        </button>
      ) : null} */}
    </div>
  )
}
