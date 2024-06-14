'use client'

import { getRecommendationsData } from '../actions'
import TrackCard from '@/components/shared/TrackCard'
import { Button } from '@/components/ui/button'
import { SpotifyTrack } from '@/lib/types'
import { useRouter } from 'next/navigation'

export default function Generator() {
    const router = useRouter()

    return (
        <section className="h-full p-12">
            <h3 className="text-center text-2xl underline my-4">HOW IT WORKS</h3>

            <div className="grid h-full w-full grid-cols-1 md:grid-cols-3 gap-16 rounded-lg bg-slate-600/40 p-12 text-lg">
                <div className="col-span-1 flex flex-col gap-8">
                    <h4 className="text-center text-xl">
                        <span className="font-bold text-indigo-300">Step 1: </span>
                        Search
                    </h4>

                    <div className="border-x border-emerald-500 p-4">
                        <p>
                            To begin, search for any songs you can find on
                            Spotify. You can select up to five songs, and the
                            recommendations will be based on the overall
                            qualities present in these selections.
                        </p>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-8">
                    <h4 className="text-center text-xl">
                        <span className="font-bold text-indigo-300">Step 2: </span>
                        Adjustments
                    </h4>

                    <div className="border-x border-emerald-500 p-4">
                        <p>
                            Here, you will find different qualities of the songs
                            you can tweak to adjust your results. Each of these
                            adjustments are optional, and represent musical
                            features within a song.
                        </p>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-8">
                    <h4 className="text-center text-xl">
                        <span className="font-bold text-indigo-300">Step 3: </span>
                        Results
                    </h4>
                    <div className="border-x border-emerald-500 p-4">
                        <p>
                            Your selected songs and any adjustments you make
                            will retreive recommended tracks from Spotify. Follow
                            the link to listen or save these songs to your
                            personal library.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-row justify-center">
                <Button
                    onClick={() => router.push('/generator/g/search')}
                    size={'xl'}
                    className="text-2xl"
                    variant={'app1'}
                >
                    Begin
                </Button>
            </div>
        </section>
    )
}
