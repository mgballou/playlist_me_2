import Subnav from '@/components/generator/Subnav'
import TracksSidebar from '@/components/generator/TracksSidebar'
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
                    <TracksSidebar />

                    <div className="min-w-2/3">
                        {/* children are search, adjustments, results */}
                        {children}
                    </div>
                </TracksStoreProvider>
            </div>
        </>
    )
}
