'use client'
import { useState } from 'react'
import { useZxing } from 'react-zxing'
import { BarcodeFormat, DecodeHintType } from '@zxing/library'

export const BarCodeScanner = () => {
  const [result, setResult] = useState('')

  const hints = new Map()
  // const formats = [
  //   BarcodeFormat.QR_CODE,
  //   BarcodeFormat.DATA_MATRIX,
  //   BarcodeFormat.CODE_128,
  //   BarcodeFormat.EAN_13,
  //   BarcodeFormat.EAN_8,
  //   BarcodeFormat.CODE_39,
  // ]

  hints.set('POSSIBLE_FORMATS', ['CODE_128', 'EAN_13', 'EAN_8', 'CODE_39'])

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText())
    },
    hints,
  })

  console.log('result', result)

  return (
    <>
      <video ref={ref} className="h-full w-full object-cover" />
      <p className="text-red-500">
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  )
}
