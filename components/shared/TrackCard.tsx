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

interface Props {
    track: SpotifyTrack
    variant: TrackCardVariant
}

function formatNumber(input: number) {
    return Math.floor(input * 100)
}

export default function TrackCard({ track, variant }: Props) {
    return (
        <>
            <div className="flex h-full flex-col">
                <Card className="flex w-80 flex-grow flex-col gap-2 ">
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
                        </CardHeader>
                    </div>
                    <CardFooter className="flex min-h-14 flex-col items-start gap-3 p-2">
                        {variant !== 'selection' && (
                            <div className="items-evenly flex flex-row flex-wrap justify-center p-2">
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
                            <Button size={'sm'} className="h-6 w-1/2">
                                Listen on Spotify
                            </Button>
                            {variant !== 'result' && (
                                <Button size={'sm'} className="h-6 w-1/2">
                                    {variant === 'search' && 'Add'}
                                    {variant === 'selection' && 'Remove'} Track
                                </Button>
                            )}
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}
