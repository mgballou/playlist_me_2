'use client'

import Image from 'next/image'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'
import { SpotifyTrack, TrackCardVariant } from '@/lib/types'
import { useTracksStore } from '@/context/providers/tracks-store-provider'
import clsx from 'clsx'
import Link from 'next/link'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

interface Props {
    track: SpotifyTrack
    variant: TrackCardVariant
}

function formatNumber(input: number | undefined) {
    if (!input) {
        return 0
    }
    return Math.round(input * 100)
}

const MyTrackCard = forwardRef<HTMLDivElement, Props>(({ track, variant }, ref) => {
    const { tracks, addTrack, removeTrack } = useTracksStore((state) => state)

    const selected = tracks.includes(track.spotifyId)

    return (
        <>
            <div ref={ref} className={clsx("flex flex-col", {'w-1/2': variant === 'demo'})}>
                <Card
                    className={clsx('flex flex-grow flex-col gap-2', {
                        'border border-white': selected && variant === 'search',
                        'w-72': variant !== 'demo',
                    })}
                >
                    <div className={clsx("flex flex-grow border-b-4 border-slate-700", {'flex-row': variant !== 'demo', 'flex-col items-center': variant === 'demo'})}>
                        <CardContent className={clsx("p-0", {'w-1/3': variant !== 'demo'})}>
                            <Image
                                src={track.artwork}
                                width={'112'}
                                height={'112'}
                                alt={`Album artwork for ${track.title} by ${track.artist}`}
                                className=""
                            ></Image>
                        </CardContent>
                        <CardHeader className={clsx("flex", {'w-2/3': variant !== 'demo', 'p-2': variant === 'demo'})}>
                            <CardTitle className="text-sm">
                                {track.artist}
                            </CardTitle>
                            <CardDescription>{track.title}</CardDescription>
                            {variant !== 'demo' && (
                                <Link
                                    className="text-xs"
                                    href={track.link}
                                    target="blank"
                                    rel="noopener noreferrer"
                                >
                                    Listen on Spotify
                                </Link>
                            )}
                        </CardHeader>
                    </div>

                    {variant !== 'demo' && (
                        <CardFooter className="flex min-h-14 flex-col items-start gap-3 p-2">
                            {variant !== 'selection' && (
                                <div className="items-evenly flex flex-row flex-wrap justify-center">
                                    <Badge
                                        variant={'outline'}
                                        className="flex flex-col items-center"
                                    >
                                        {formatNumber(track.acousticness)}
                                        <Separator
                                            orientation="horizontal"
                                            className="mx-1"
                                        />
                                        Acousticness
                                    </Badge>
                                    <Badge
                                        variant={'outline'}
                                        className="flex flex-col items-center"
                                    >
                                        {formatNumber(track.liveness)}
                                        <Separator
                                            orientation="horizontal"
                                            className="mx-1"
                                        />
                                        Liveness
                                    </Badge>
                                    <Badge
                                        variant={'outline'}
                                        className="flex flex-col items-center"
                                    >
                                        {formatNumber(track.danceability)}
                                        <Separator
                                            orientation="horizontal"
                                            className="mx-1"
                                        />
                                        Danceability
                                    </Badge>
                                    <Badge
                                        variant={'outline'}
                                        className="flex flex-col items-center"
                                    >
                                        {formatNumber(track.energy)}
                                        <Separator
                                            orientation="horizontal"
                                            className="mx-1"
                                        />
                                        Energy
                                    </Badge>
                                    <Badge
                                        variant={'outline'}
                                        className="flex flex-col items-center"
                                    >
                                        {formatNumber(track.instrumentalness)}
                                        <Separator
                                            orientation="horizontal"
                                            className="mx-1"
                                        />
                                        Instrumentalness
                                    </Badge>
                                </div>
                            )}

                            <div className="space=evenly mb-4 flex w-full flex-row justify-center gap-3">
                                {(variant === 'search' ||
                                    variant === 'selection') &&
                                    (selected ? (
                                        <Button
                                            size="sm"
                                            className="h-6 w-1/2"
                                            onClick={() =>
                                                removeTrack(track.spotifyId)
                                            }
                                        >
                                            Remove Track
                                        </Button>
                                    ) : (
                                        <Button
                                            size="sm"
                                            className="h-6 w-1/2"
                                            onClick={() =>
                                                addTrack(track.spotifyId)
                                            }
                                        >
                                            Add Track
                                        </Button>
                                    ))}
                            </div>
                        </CardFooter>
                    )}
                </Card>
            </div>
        </>
    )
})

const TrackCard = motion(MyTrackCard)

TrackCard.displayName = 'TrackCard';

export default TrackCard;