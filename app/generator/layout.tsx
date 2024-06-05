import Subnav from '@/components/generator/Subnav'
import TracksSidebar from '@/components/generator/TracksSidebar'
import { TracksStoreProvider } from '@/context/providers/tracks-store-provider'

export default function GeneratorLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
