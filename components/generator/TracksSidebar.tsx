'use client'

// React hooks
import { useState, useEffect, useCallback } from 'react'

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

    const getSelections = useCallback(async () => {
        if (tracks.length > 0) {
          try {
            const response = await getTrackData(tracks);
            if (Array.isArray(response)) {
              setSelections(response);
            } else {
              console.error('Response is not an array:', response);
              setSelections([]);
            }
          } catch (error) {
            console.error('Error fetching track data:', error);
            setSelections([]);
          }
        } else {
          setSelections([]);
        }
      }, [tracks]);

    useEffect(() => {
        getSelections()
    }, [tracks, getSelections])

    return (
        <>
            <div
                className={
                    'col-span-1 flex h-[90vh] flex-col justify-start gap-6 p-2'
                }
            >
                <div className="flex h-12 flex-row justify-between">
                    <Button onClick={() => handleNextPage()} variant={'app1'}>
                        Next Step
                    </Button>
                    <Button onClick={() => clearTracks()} variant={'app2'}>
                        Clear Selections
                    </Button>
                </div>

                <div className="flex h-full flex-col items-center gap-2 overflow-scroll bg-slate-600">
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
