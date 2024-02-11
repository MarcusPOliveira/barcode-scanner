/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect, useRef } from 'react'
import QrScanner from 'qr-scanner'

export const BarCodeScanner = () => {
  const [scanning, setScanning] = useState(true)
  const [qrScanner, setQrScanner] = useState<QrScanner | null>(null)

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!scanning) {
      if (qrScanner) {
        qrScanner.destroy()
        setQrScanner(null)
      }
      return
    }
    if (videoRef.current) {
      const scanner = new QrScanner(
        videoRef.current,
        (result) => {
          if (result) {
            setScanning(false)
          }
        },
        // @ts-ignore
        {
          onDecodeError: (error: any) => {
            console.log('onDecodeError', error)
          },
          highlightScanRegion: true,
          returnDetailedScanResult: true,
          overlay: overlayRef.current,
        },
      )
      scanner.start()
      scanner.setInversionMode('both')
      setQrScanner(scanner)
      return () => {
        scanner.destroy()
        setQrScanner(null)
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scanning])

  return (
    <div className="flex h-[500px] w-full">
      <video
        controls={false}
        ref={videoRef}
        preload="auto"
        autoPlay
        playsInline
        width={'100%'}
        height={'100%'}
        className="h-full w-full object-cover lg:max-w-[1000px]"
      ></video>
      <div
        ref={overlayRef}
        className="absolute left-0 top-0 h-full w-full animate-pulse"
      >
        <div className="absolute right-0 top-0 h-10 w-10 rounded-tr-md border-r-4 border-t-4 border-white"></div>
        <div className="absolute left-0 top-0 h-10 w-10 rounded-tl-md border-l-4 border-t-4 border-white"></div>
        <div className="absolute bottom-0 right-0 h-10 w-10 rounded-br-md  border-b-4 border-r-4 border-white"></div>
        <div className="absolute bottom-0 left-0 h-10 w-10 rounded-bl-md border-b-4 border-l-4 border-white"></div>
      </div>
    </div>
  )
}
