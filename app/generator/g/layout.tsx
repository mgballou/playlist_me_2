import Subnav from '@/components/generator/Subnav'
import TracksSidebar from '@/components/generator/TracksSidebar'
import { AdjustmentsStoreProvider } from '@/context/providers/adjustments-store-provider'
import { TracksStoreProvider } from '@/context/providers/tracks-store-provider'

export default function GLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <div className="flex w-full flex-row justify-center text-center">
                <Subnav />
            </div>

            <div className="grid grid-cols-4 gap-0">
                <TracksStoreProvider>
                    <AdjustmentsStoreProvider>
                        <TracksSidebar />
                        {/* children are search, adjustments, results */}
                        {children}
                    </AdjustmentsStoreProvider>
                </TracksStoreProvider>
            </div>
        </>
    )
}
