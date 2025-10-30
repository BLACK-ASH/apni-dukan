import React from 'react'
import './global.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  description: ' Apni Dukan using Payload in a Next.js app.',
  title: 'Apni Dukan',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
