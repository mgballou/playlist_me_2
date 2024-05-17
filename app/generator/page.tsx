'use client'

import { Button } from '@/components/ui/button'
import { getTrackData, getAPIToken } from '../actions'
import { useEffect, useState } from 'react'
import TrackCard from '@/components/shared/TrackCard'

interface SpotifyTrack {
    tName: string
    tArtist: string
    tLink: string
    spotifyId: string
    albumArtwork: string
    acousticness: number
    liveness: number
    danceability: number
    energy: number
    instrumentalness: number
}

export default function Generator() {
    const tracks = ['1xzBco0xcoJEDXktl7Jxrr']
    const [results, setResults] = useState<null | SpotifyTrack[]>()

    useEffect(() => {
        async function getData() {
            const data = await getTrackData(tracks)
            setResults(data)
        }

        getData()
    }, [])

    return (
        <main className="flex min-h-screen flex-col justify-evenly p-12">
            Welcome 2 generator
            {/* <Button onClick={async () => await getTrackData(tracks)}>
                Dummy results
            </Button>
            <Button onClick={async () => await getAPIToken()}>
                Dummy Token
            </Button> */}
            <div className="inset-4 flex min-h-60 w-full flex-row flex-wrap justify-center gap-2 bg-slate-600 p-4">
                {results?.map((track, idx) => {
                    return (
                        <div key={track.spotifyId}>
                            <TrackCard key={track.spotifyId} track={track} />
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
