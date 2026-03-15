'use client'

import { ThemeProvider } from '@/hooks/useTheme'
import { Modal } from '@/components/ui/Modal'
import { useModal } from '@/hooks/useModal'
import { PrivacyPolicy } from '@/components/legal/PrivacyPolicy'
import { TermsOfUse } from '@/components/legal/TermsOfUse'
import { CookiePolicy } from '@/components/legal/CookiePolicy'

function ModalProvider({ children }: { children: React.ReactNode }) {
  const { isOpen, modalType, closeModal } = useModal()

  const getModalContent = () => {
    switch (modalType) {
      case 'privacy':
        return { title: 'Privacy Policy', component: <PrivacyPolicy /> }
      case 'terms':
        return { title: 'Terms of Use', component: <TermsOfUse /> }
      case 'cookies':
        return { title: 'Cookie Policy', component: <CookiePolicy /> }
      default:
        return null
    }
  }

  const modalContent = getModalContent()

  return (
    <>
      {children}
      {modalContent && (
        <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title}>
          {modalContent.component}
        </Modal>
      )}
    </>
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </ThemeProvider>
  )
}