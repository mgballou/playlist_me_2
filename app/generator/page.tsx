'use client'

import { Button } from '@/components/ui/button'
import { getTrackData, getAPIToken } from '../actions'
import { useEffect, useState } from 'react'

interface SpotifyTrack {
    tName: string
    tArtist: string
    tLink: string
    spotifyId: string
    albumArtwork: string
  
}


export default function Generator() {
    const tracks = ['1xzBco0xcoJEDXktl7Jxrr']
    const [results, setResults] = useState<null | SpotifyTrack[]>()

    useEffect(() => {

        async function getData(){
            const data = await getTrackData(tracks)
            setResults(data)
        }

        getData()

    }, [])

    

    return (
        <main className="flex min-h-screen flex-col justify-evenly p-24">
            Welcome 2 generator
            <Button onClick={async () => await getTrackData(tracks)}>
                Dummy results
            </Button>
            <Button onClick={async () => await getAPIToken()}>
                Dummy Token
            </Button>
            

            <div className='flex flex-row flex-wrap gap-2 bg-slate-600 inset-4 w-full h-60'>

                {results?.map((track, idx) => {
                    return (<>
                    

                    
                    
                    </>)

                })}

            </div>
        </main>
    )
}
