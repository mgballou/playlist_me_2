import { getTrackData } from '../actions'
import TrackCard from '@/components/shared/TrackCard'
import { SpotifyTrack } from '@/lib/types'

import path from 'path'
import fs from 'fs'

function pullJSON() {
    const filePath = path.join(process.cwd(), 'public', 'trackData.json')
    const jsonData = fs.readFileSync(filePath, 'utf8')
    const results: SpotifyTrack[] = JSON.parse(jsonData)

    return results
}

const tracks = ['1xzBco0xcoJEDXktl7Jxrr']

export default async function Generator() {
    const results: SpotifyTrack[] = pullJSON()
    // const results: SpotifyTrack[] = await getTrackData(tracks)

    return (
        <main className="flex min-h-screen flex-col justify-evenly p-12">
            Generator
            {/* <div className="inset-4 flex min-h-60 w-full flex-row flex-wrap justify-center gap-2 bg-slate-600 p-4">
                {results?.map((track, idx) => {
                    return (
                        <div key={track.spotifyId}>
                            <TrackCard key={track.spotifyId} track={track} variant={'selection'}/>
                        </div>
                    )
                })}
            </div> */}
        </main>
    )
}
