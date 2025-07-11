'use client';

import LogoAnimation from '@/components/LogoAnimation'
import { useState } from 'react'
import Header from '@/components/Header'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLogoAnimationComplete, setIsLogoAnimationComplete] = useState(false);

  return (
    <>
      {!isLogoAnimationComplete && (
        <LogoAnimation onAnimationComplete={() => setIsLogoAnimationComplete(true)} />
      )}
      {isLogoAnimationComplete && (
        <>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </>
      )}
    </>
  )
} 