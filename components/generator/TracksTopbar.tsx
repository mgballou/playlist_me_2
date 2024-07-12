'use client'

// React hooks
import { useState, useEffect, useCallback, useRef } from 'react'

// External libraries
import clsx from 'clsx'

// Next.js navigation hooks
import { usePathname, useRouter } from 'next/navigation'

// Application actions
import { getTrackData } from '@/app/actions'

// Application components
import TrackCard from '@/components/shared/TrackCard'
import { Button } from '../ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card'

// Context providers
import { useTracksStore } from '@/context/providers/tracks-store-provider'

// Application types
import { SpotifyTrack } from '@/lib/types'

interface CircleProps {
    isSelection: boolean
    track?: SpotifyTrack
}

type HoverCardContentElement = HTMLDivElement & {
    open: boolean
}

function Circle({ isSelection, track }: CircleProps) {
    const hoverContentRef = useRef<HoverCardContentElement>(null)

    const bgImageStyle =
        isSelection && track ? { backgroundImage: `url(${track.artwork})` } : {}

    const [isOpen, setIsOpen] = useState<boolean | null>(null)

    const handleMouseEnter = () => {
        setIsOpen(true)
    }

    const handleMouseLeave = () => {
        setIsOpen(false)
    }

    const handleClick = () => {
        setIsOpen((prev) => !prev)
    }

    const hoverCardProps = isOpen ? { open: isOpen } : null

    return (
        <HoverCard {...hoverCardProps}>
            <div className="col-span-1 flex items-center justify-center">
                <HoverCardTrigger
                    style={bgImageStyle}
                    className={clsx(
                        'aspect-square h-full w-full rounded-full border-4 border-slate-500',
                        {
                            'bg-cover bg-center': isSelection === true,
                            'bg-slate-500': isSelection === false,
                        }
                    )}
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                ></HoverCardTrigger>
                <HoverCardContent className="border-none bg-transparent">
                    {isSelection && track ? (
                        <TrackCard track={track} variant={'selection'} />
                    ) : (
                        <></>
                    )}
                </HoverCardContent>
            </div>
        </HoverCard>
    )
}

export default function TracksTopbar() {
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
    }, [tracks])

    useEffect(() => {
        getSelections()
    }, [tracks, getSelections])

    return (
        <div className="grid grid-cols-12 gap-1 p-2">
            <div className="col-span-9 grid grid-cols-5 gap-3 p-3">
                {selections?.map((selection) => {
                    return (
                        <Circle
                            key={'topbar' + selection.spotifyId}
                            isSelection={true}
                            track={selection}
                        />
                    )
                })}

                {selections.length < 5 &&
                    Array.from({ length: 5 - selections.length }).map(
                        (_, idx) => {
                            return (
                                <Circle
                                    isSelection={false}
                                    key={'topbar' + idx}
                                />
                            )
                        }
                    )}
            </div>
            <div className="col-span-3 flex flex-col items-center justify-between">
                <Button
                    onClick={() => handleNextPage()}
                    variant={'app1'}
                    size={'sm'}
                >
                    Next
                </Button>
                <Button
                    onClick={() => clearTracks()}
                    variant={'app2'}
                    size={'sm'}
                >
                    Clear
                </Button>
            </div>
        </div>
    )
}
