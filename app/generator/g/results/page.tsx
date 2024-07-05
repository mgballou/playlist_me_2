'use client'

import { getRecommendationsData } from '@/app/actions'
import TrackCard from '@/components/shared/TrackCard'
import { Button } from '@/components/ui/button'
import { useAdjustmentsStore } from '@/context/providers/adjustments-store-provider'
import { useTracksStore } from '@/context/providers/tracks-store-provider'
import { SpotifyTrack } from '@/lib/types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Results() {
    const router = useRouter()

    const { tracks, clearTracks } = useTracksStore((state) => state)
    const { adjustments, setAdjustments } = useAdjustmentsStore(
        (state) => state
    )
    const [recommendations, setRecommendations] = useState<SpotifyTrack[]>([])

    async function getResults() {
        const results = await getRecommendationsData(tracks, adjustments)
        setRecommendations(results)
    }

    function startOver() {
        clearTracks()
        setAdjustments({})
        router.push('/generator/g/search')
    }

    useEffect(() => {
        getResults()
    }, [tracks])

    return (
        <main className="col-span-3 h-[90vh] flex flex-col gap-6 p-2">
            <div className="flex flex-row justify-center gap-4">
                <Button onClick={() => getResults()} variant={'app1'}>More Songs</Button>
                <Button onClick={() => startOver()} variant={'app2'}>Start Over</Button>
            </div>

            <div className="flex h-full w-full flex-row flex-wrap justify-center gap-2 overflow-scroll bg-slate-600">
                {tracks.length > 0 ? (
                    recommendations?.map((rec) => {
                        return (
                            <TrackCard
                                key={'rec' + rec.spotifyId}
                                track={rec}
                                variant={'result'}
                            />
                        )
                    })
                ) : (
                    <p>You must select tracks to get recommendations.</p>
                )}
            </div>
        </main>
    )
}
