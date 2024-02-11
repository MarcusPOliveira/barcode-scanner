/* eslint-disable n/handle-callback-err */
'use client'
import { useEffect, useState } from 'react'
import {
  Html5QrcodeScanner,
  Html5Qrcode,
  Html5QrcodeSupportedFormats,
} from 'html5-qrcode'

export const BarCodeScanner = () => {
  const [scanResult, setScanResult] = useState('')

  useEffect(() => {
    const scanner = new Html5Qrcode('reader')

    const config = {
      fps: 10,
      qrbox: 250,
      formatsToSupport: [
        Html5QrcodeSupportedFormats.CODE_128,
        Html5QrcodeSupportedFormats.EAN_13,
        Html5QrcodeSupportedFormats.CODE_39,
        Html5QrcodeSupportedFormats.CODE_93,
        Html5QrcodeSupportedFormats.DATA_MATRIX,
        Html5QrcodeSupportedFormats.EAN_8,
      ],
    }

    const onScanSuccess = (decodedText: any, decodedResult: any) => {
      // scanner.clear()
      setScanResult(decodedText)
      console.log(`onScanSuccess: ${decodedText} + ${decodedResult}`)
    }

    const onScanError = (err: string) => {
      // console.warn('onScanError scaning', err)
    }

    scanner.start(
      { facingMode: { exact: 'environment' } },
      config,
      onScanSuccess,
      onScanError,
    )

    // scanner.render(onScanSuccess, onScanError)
  }, [])

  console.log('result', scanResult)

  return (
    <>
      <div id="reader" className="" />
      <p className="text-red-500">
        <span>Last result:</span>
        <span>{scanResult && scanResult}</span>
      </p>
    </>
  )
}
