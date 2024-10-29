'use client'
import { useEffect } from 'react'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

type AlertProps = {
  title: string
  message: string
  isOpen: boolean
  handleConfirm?: () => void
  handleCancel?: () => void
}

export const Alert = ({
  title,
  message,
  isOpen,
  handleConfirm,
  handleCancel,
}: AlertProps) => {
  const MySwal = withReactContent(Swal)

  useEffect(() => {
    if (isOpen) {
      MySwal.fire({
        title: <p>{title}</p>,
        html: message,
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
      }).then((r) => {
        if (r.isConfirmed) {
          handleConfirm && handleConfirm()
        } else {
          handleCancel && handleCancel()
        }
      })
    }
  }, [isOpen])

  return null
}
