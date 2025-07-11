import '../styles/globals.css'
import { metadata } from './metadata'
import ClientLayout from '@/components/ClientLayout'

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
} 