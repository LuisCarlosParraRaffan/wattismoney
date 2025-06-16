'use client';

import '../styles/globals.css'
import LogoAnimation from '@/components/LogoAnimation'
import { useState } from 'react'
import Header from '@/components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLogoAnimationComplete, setIsLogoAnimationComplete] = useState(false);

  return (
    <html lang="es">
      <body>
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
      </body>
    </html>
  )
} 