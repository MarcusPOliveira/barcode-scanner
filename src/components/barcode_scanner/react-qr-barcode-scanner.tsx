'use client'
import React, { useState, useEffect, useRef } from 'react'
import BarcodeScannerComponent from 'react-qr-barcode-scanner'

export const BarCodeScanner = () => {
  const [data, setData] = useState('Not Found')

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text)
          else setData('Not Found')
        }}
      />
      <p>{data}</p>
    </>
  )
}
