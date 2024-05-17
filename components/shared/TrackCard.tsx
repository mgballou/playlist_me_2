import Image from 'next/image'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'

interface SpotifyTrack {
    tName: string
    tArtist: string
    tLink: string
    spotifyId: string
    albumArtwork: string
    acousticness: number
    liveness: number
    danceability: number
    energy: number
    instrumentalness: number
}

interface Props {
    track: SpotifyTrack
}

export default function TrackCard({ track }: Props) {
    function formatNumber(input: number) {
        return Math.floor(input * 100)
    }
    return (
        <>
            <div className="flex h-full flex-col">
                <Card className=" flex w-80 flex-grow flex-col gap-2 ">
                    <div className="flex flex-grow flex-row border-b-4 border-slate-700">
                        <CardContent className="w-1/3 p-0">
                            <Image
                                src={track.albumArtwork}
                                width={'112'}
                                height={'112'}
                                alt={`Album artwork for ${track.tName} by ${track.tArtist}`}
                                className=""
                            ></Image>
                        </CardContent>
                        <CardHeader className=" flex w-2/3 ">
                            <CardTitle className="text-sm">
                                {track.tArtist}
                            </CardTitle>
                            <CardDescription>{track.tName}</CardDescription>
                        </CardHeader>
                    </div>
                    <CardFooter className="flex min-h-14 flex-col items-start gap-3 p-2">
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

                        <div className="space-between mb-4 flex w-full flex-row gap-3">
                            <Button size={'sm'} className="h-6 w-1/2">
                                Listen on Spotify
                            </Button>
                            <Button size={'sm'} className="h-6 w-1/2">
                                Add/Remove Track
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>

            {/* <div className="flex h-full flex-col">
                <div className="bg-card flex w-40 flex-grow flex-col items-center gap-2">
                    <Image
                        src={track.albumArtwork}
                        width={'128'}
                        height={'128'}
                        alt={`Album artwork for ${track.tName} by ${track.tArtist}`}
                        className="mx-auto"
                    ></Image>

                    <div className="p-4">
                        <ul>
                            <li>{track.tArtist}</li>
                            <li>{track.tName}</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </>
    )
}
