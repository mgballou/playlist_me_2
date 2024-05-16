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
        <div className="flex h-full flex-col">
        <Card className=" w-80 flex-grow flex flex-col gap-2 ">
            <div className='flex flex-row border-b-4 border-slate-700'>
            <CardContent className='w-1/3 p-0'>
                <Image
                    src={track.albumArtwork}
                    width={'112'}
                    height={'112'}
                    alt={`Album artwork for ${track.tName} by ${track.tArtist}`}
                    className=''
                ></Image>
            </CardContent>
            <CardHeader className=' text-left w-2/3 space-y-0.5 p-2 border border-red-500'>
                <CardTitle className='text-sm'>{track.tArtist}</CardTitle>
                <CardDescription>{track.tName}</CardDescription>
            </CardHeader>
            </div>
            <CardFooter className='h-14'>

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
