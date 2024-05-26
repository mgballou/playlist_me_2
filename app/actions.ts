'use server'
import { cookies } from 'next/headers'
import { SpotifyToken } from '@/lib/types'
import path from 'path'
import fs from 'fs'

export async function getAPIToken() {
    return (
        await fetch('http://localhost:3000/api/spotify/auth', {
            next: { revalidate: 3000 },
        })
    ).json()
}

export async function getTrackData(tracks: string[]) {
    // this entire thing can just be fetched in a server component instead

    const token = await getAPIToken()

    const url = 'https://api.spotify.com/v1/recommendations'

    const selectionsString = tracks.join(',')

    // TODO: remove any
    const params = new URLSearchParams({
        limit: 12,
        market: 'US',
        seed_artists: '',
        seed_genres: '',
        seed_tracks: selectionsString,
    } as any)

    const options = {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
    }
    try {
        const response = await fetch(url + '?' + params.toString(), options)
        const responseData = await response.json()
        // remove any

        const endpoint = 'https://api.spotify.com/v1/audio-features'

        const secondParams = new URLSearchParams({
            ids: responseData.tracks?.map((track: any) => {
                return track.id
            }),
        })
        const otherFeatures = await fetch(
            endpoint + '?' + secondParams.toString(),
            options
        )
        const otherFeaturesData = await otherFeatures.json()

        const results = responseData.tracks?.map((track: any, idx: number) => {
            return {
                title: track.name,
                artist: track.artists[0].name,
                link: track.external_urls.spotify,
                spotifyId: track.id,
                artwork: track.album.images[1].url,
                acousticness:
                    otherFeaturesData.audio_features[idx].acousticness,
                liveness: otherFeaturesData.audio_features[idx].liveness,
                danceability:
                    otherFeaturesData.audio_features[idx].danceability,
                energy: otherFeaturesData.audio_features[idx].energy,
                instrumentalness:
                    otherFeaturesData.audio_features[idx].instrumentalness,
            }
        })

        return results
    } catch (error) {
        console.log(error)
    }
}
