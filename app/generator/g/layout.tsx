import Subnav from '@/components/generator/Subnav'
import TracksDisplay from '@/components/generator/TracksDisplay'
import TracksSidebar from '@/components/generator/TracksSidebar'
import { AdjustmentsStoreProvider } from '@/context/providers/adjustments-store-provider'
import { TracksStoreProvider } from '@/context/providers/tracks-store-provider'

export default function GLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex h-full flex-grow flex-col">
            <div className="flex w-full flex-row justify-center text-center">
                <Subnav />
            </div>

            <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-0">
                <TracksStoreProvider>
                    <AdjustmentsStoreProvider>
                        <TracksDisplay />
                        {/* children are search, adjustments, results */}
                        {children}
                    </AdjustmentsStoreProvider>
                </TracksStoreProvider>
            </div>
        </div>
    )
}
