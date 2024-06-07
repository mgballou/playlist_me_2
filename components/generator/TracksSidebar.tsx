'use client'

// React hooks
import { useState, useEffect } from 'react'

// External libraries
import clsx from 'clsx'

// Next.js navigation hooks
import { usePathname, useRouter } from 'next/navigation'

// Application actions
import { getTrackData } from '@/app/actions'

// Application components
import TrackCard from '@/components/shared/TrackCard'
import { Button } from '../ui/button'

// Context providers
import { useTracksStore } from '@/context/providers/tracks-store-provider'

// Application types
import { SpotifyTrack } from '@/lib/types'

export default function TracksSidebar() {
    const pathname = usePathname()
    const router = useRouter()

    const { tracks, addTrack, removeTrack, clearTracks } = useTracksStore(
        (state) => state
    )

    const [selections, setSelections] = useState<SpotifyTrack[]>([])

    function handleNextPage() {
        switch (pathname) {
            case '/generator/g/search':
                router.push('/generator/g/adjustments')
                break
            case '/generator/g/adjustments':
                router.push('/generator/g/results')
                break
            default:
                break
        }
    }

    async function getSelections() {
        if (tracks.length > 0) {
            try {
                const response = await getTrackData(tracks)
                if (Array.isArray(response)) {
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
        <>
            <div
                className={
                    'flex w-1/3 h-full flex-grow flex-col justify-start gap-6 p-4'
                }
            >
                <div className="flex h-12 flex-row justify-between">
                    <Button onClick={() => clearTracks()}>
                        Clear Selections
                    </Button>
                    <Button onClick={() => handleNextPage()}>Next Step</Button>
                </div>

                <div className="flex min-h-full flex-col gap-2 overflow-scroll bg-slate-600 ">
                    {selections?.map((selection) => {
                        return (
                            <TrackCard
                                key={'sidebar' + selection.spotifyId}
                                variant={'selection'}
                                track={selection}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
