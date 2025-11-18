import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Light Projection Art | 3D Printed Sculptures',
  description: 'Transform your space with 3D printed sculptures that create stunning light patterns and shadows. Download free STL files for three unique designs.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.jpg',
        type: 'image/jpeg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
