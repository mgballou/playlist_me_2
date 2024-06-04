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

export default function TrackCard({ track, variant }: Props) {
    const { tracks, addTrack, removeTrack } = useTracksStore((state) => state)

    const selected = tracks.includes(track.spotifyId)

    function handleAddRemoveTrack() {
        if (selected) {
            removeTrack(track.spotifyId)
        } else {
            addTrack(track.spotifyId)
        }
    }

    return (
        <>
            <div className="flex flex-col">
                <Card
                    className={clsx('flex w-72 flex-grow flex-col gap-2', {
                        'border border-white': selected && variant === 'search',
                    })}
                >
                    <div className="flex flex-grow flex-row border-b-4 border-slate-700">
                        <CardContent className="w-1/3 p-0">
                            <Image
                                src={track.artwork}
                                width={'112'}
                                height={'112'}
                                alt={`Album artwork for ${track.title} by ${track.artist}`}
                                className=""
                            ></Image>
                        </CardContent>
                        <CardHeader className=" flex w-2/3 ">
                            <CardTitle className="text-sm">
                                {track.artist}
                            </CardTitle>
                            <CardDescription>{track.title}</CardDescription>
                            <Link
                                className="text-xs"
                                href={track.link}
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                Listen on Spotify
                            </Link>
                        </CardHeader>
                    </div>
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
                </Card>
            </div>
        </>
    )
}
