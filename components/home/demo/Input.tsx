'use client'

import TrackCard from '@/components/shared/TrackCard'
import { SpotifyTrack } from '@/lib/types'
import { motion } from 'framer-motion'

interface Props {
    tracks: SpotifyTrack[]
    animationDuration: number;
    animationDelay: number;
    isVisible: boolean
}

export default function Input({ tracks, animationDuration, animationDelay, isVisible }: Props) {
    return (

        <>
        {isVisible && <div className="flex flex-row gap-2 p-4" >
            {tracks.map((track, idx) => {
                return (
                    <TrackCard
                        key={track.spotifyId}
                        variant="demo"
                        track={track}
                        initial={{ x: '100vw' }}
                        animate={{ x: 0 } }
                        transition={{ duration: animationDuration, delay: idx * animationDelay }}
                        
                    />
                )
            })}
        </div>}
        </>
        
    )
}
