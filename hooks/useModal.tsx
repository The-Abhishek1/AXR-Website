'use client'

import { useState, useEffect } from 'react'

export function useModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'cookies' | null>(null)

  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      setModalType(event.detail)
      setIsOpen(true)
    }

    window.addEventListener('openModal' as any, handleOpenModal)

    return () => {
      window.removeEventListener('openModal' as any, handleOpenModal)
    }
  }, [])

  const openModal = (type: 'privacy' | 'terms' | 'cookies') => {
    setModalType(type)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalType(null)
  }

  return {
    isOpen,
    modalType,
    openModal,
    closeModal,
  }
}