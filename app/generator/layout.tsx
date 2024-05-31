import Subnav from '@/components/generator/Subnav'
import { TracksStoreProvider } from '@/context/providers/tracks-store-provider'

export default function GeneratorLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <div className="flex w-full flex-row justify-center text-center">
                <Subnav />
            </div>

            <div className="flex flex-row">
                <TracksStoreProvider>
                    <div className="w-1/3 border border-red-500">
                        Sidebar goes here
                    </div>
                    <div className="w-2/3 border border-red-500">
                        {/* children are search, adjustments, results */}
                        {children}
                    </div>
                </TracksStoreProvider>
            </div>
        </>
    )
}
