import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
    title: 'Playlist.me',
    description: 'Building cohesive playlists just got simpler',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'bg-background dark min-h-screen font-sans antialiased',
                    fontSans.variable
                )}
            >
                {children}
            </body>
        </html>
    )
}
