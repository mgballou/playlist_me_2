'use client'

import { useMediaQuery } from '@/lib/hooks'
import TracksTopbar from './TracksTopbar'
import TracksSidebar from './TracksSidebar'

export default function TracksDisplay() {
    const aboveMedium = useMediaQuery('(min-width: 768px)')

    return <>{aboveMedium ? <TracksSidebar /> : <TracksTopbar />}</>
}
