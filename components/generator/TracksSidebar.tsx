'use client'

import { useTracksStore } from '@/context/providers/tracks-store-provider'

export default function TracksSidebar() {
    const { tracks, addTrack, removeTrack } = useTracksStore((state) => state)

    return <div>
        {tracks.map(track => {
            return <p key="track">Track {track}</p>
        })}
    </div>
}
