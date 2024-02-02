'use client'
import { useEffect, useMemo, useRef } from 'react'
import {
  BrowserMultiFormatReader,
  DecodeHintType,
  Result,
} from '@zxing/library'

interface ZxingOptions {
  hints?: Map<DecodeHintType, any>
  constraints?: MediaStreamConstraints
  timeBetweenDecodingAttempts?: number
  onResult?: (result: Result) => void
  onError?: (error: Error) => void
}

export const useZxing = ({
  constraints = {
    audio: false,
    video: {
      facingMode: 'environment',
    },
  },
  hints,
  timeBetweenDecodingAttempts = 300,
  onResult = () => {
    /* noop */
  },
  onError = () => {
    /* noop */
  },
}: ZxingOptions = {}) => {
  const ref = useRef<HTMLVideoElement>(null)

  const reader = useMemo<BrowserMultiFormatReader>(() => {
    const instance = new BrowserMultiFormatReader(hints)
    instance.timeBetweenDecodingAttempts = timeBetweenDecodingAttempts
    return instance
  }, [hints, timeBetweenDecodingAttempts])

  useEffect(() => {
    if (!ref.current) return
    reader.decodeFromConstraints(constraints, ref.current, (result, error) => {
      if (result) onResult(result)
      if (error) onError(error)
    })
    return () => {
      reader.reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, reader])

  return { ref }
}
