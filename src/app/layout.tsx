import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anantam Rocketry Journey | TARSR Automation Engineer',
  description: 'Building Flight Computers, Telemetry Systems, and Recovery Mechanisms at TARSR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#050d1a] text-slate-200 font-body antialiased">
        {children}
      </body>
    </html>
  )
}
