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
                    'dark mx-auto max-w-7xl bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <Header />

                <main className="my-4 min-h-screen">
                {children}
                    
                </main>
                
                <Footer />
            </body>
        </html>
    )
}
