import TrackCard from '@/components/shared/TrackCard'
import { SpotifyTrack } from '@/lib/types'

interface Props {
    tracks: SpotifyTrack[]
}

export default function Input({ tracks }: Props) {
    return (
        <div className="flex flex-row gap-2 p-4">
            {tracks.map((track) => {
                return <TrackCard variant="demo" track={track} />
            })}
        </div>
    )
}
