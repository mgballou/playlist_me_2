import { getRecommendationsData } from '../actions'
import TrackCard from '@/components/shared/TrackCard'
import { SpotifyTrack } from '@/lib/types'

export const dynamic = 'force-dynamic'

const tracks = ['2IRZnDFmlqMuOrYOLnZZyc']

export default async function Generator() {
    const results: SpotifyTrack[] = await getRecommendationsData(tracks)

    return (
        <main className="flex min-h-screen flex-col justify-evenly p-12">
            Generator
            <div className="inset-4 flex min-h-60 w-full flex-row flex-wrap justify-center gap-2 bg-slate-600 p-4">
                {/* {results?.map((track, idx) => {
                    return (
                        <TrackCard
                            key={'search' + track.spotifyId}
                            track={track}
                            variant={'search'}
                        />
                    )
                })} */}
            </div>
        </main>
    )
}
