'use client'

import { useState, useEffect } from 'react'

import { getTrackData } from '@/app/actions'
import TrackCard from '@/components/shared/TrackCard'

import { useTracksStore } from '@/context/providers/tracks-store-provider'
import { SpotifyTrack } from '@/lib/types'

export default function TracksSidebar() {
    const { tracks, addTrack, removeTrack } = useTracksStore((state) => state)

    const [selections, setSelections] = useState<SpotifyTrack[]>([])

    async function getSelections() {
        if (tracks.length > 0) {
            try {
                const response = await getTrackData(tracks)
                if (Array.isArray(response)) {
                    console.log(response)
                    setSelections(response)
                } else {
                    console.error('Response is not an array:', response)
                    setSelections([])
                }
            } catch (error) {
                console.error('Error fetching track data:', error)
                setSelections([])
            }
        } else {
            setSelections([])
        }
    }

    useEffect(() => {
        getSelections()
    }, [tracks])

    return (
        <div className={tracks.length > 0 ? 'w-1/3' : 'w-0'}>
            {selections?.map((selection) => {
                return (
                    <TrackCard
                        key={selection.spotifyId}
                        variant={'selection'}
                        track={selection}
                    />
                )
            })}
        </div>
    )
}
