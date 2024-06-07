import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

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
                    'dark mx-auto flex h-dvh max-w-7xl flex-col bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <Header />
                <div className="h-[90vh] flex-grow flex-col flex border border-red-500">{children}</div>
                <Footer />
            </body>
        </html>
    )
}
