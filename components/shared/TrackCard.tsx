import Image from 'next/image'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

interface SpotifyTrack {
    tName: string
    tArtist: string
    tLink: string
    spotifyId: string
    albumArtwork: string
}

interface Props {
    track: SpotifyTrack
}

export default function TrackCard({ track }: Props) {
    return (
        <>
            {/* <Card className="w-48">
            <CardContent className='w-full p-0'>
                <Image
                    src={track.albumArtwork}
                    width={'128'}
                    height={'128'}
                    alt={`Album artwork for ${track.tName} by ${track.tArtist}`}
                    className='mx-auto'
                ></Image>
            </CardContent>
            <CardHeader>
                <CardTitle>{track.tArtist}</CardTitle>
                <CardDescription>{track.tName}</CardDescription>
            </CardHeader>

            
        </Card> */}
            <div className="flex h-full flex-col">
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
            </div>
        </>
    )
}
