'use server'

import { SpotifyTrack } from '@/lib/types'

export async function getAPIToken() {
    return (
        await fetch('http://localhost:3000/api/spotify/auth', {
            cache: 'no-store',
        })
    ).json()
}

export async function getRecommendationsData(trackIds: string[]) {
    // this entire thing can just be fetched in a server component instead
   
    const token = await getAPIToken()

    const url = 'https://api.spotify.com/v1/recommendations'

    const selectionsString = trackIds.join(',')

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
        if (!response.ok) {
            // major rework to error handling needed
            // Handle non-OK responses, e.g., rate limiting (status code 429)
            if (response.status === 429) {
                const retryAfter = response.headers.get('Retry-After')

                if (retryAfter) {
                    // Retry-After can be in seconds or a date string
                    const retryAfterSeconds = parseInt(retryAfter, 10)

                    if (!isNaN(retryAfterSeconds)) {
                        console.log(
                            `Rate limited. Retry after ${retryAfterSeconds} seconds.`
                        )
                    } else {
                        console.log(`Rate limited. Retry after ${retryAfter}.`)
                    }
                } else {
                    console.log('Rate limited. No Retry-After header present.')
                }

                throw new Error('Too many requests')
            }
            // Handle other types of errors
            console.log(response)
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const responseData = await response.json()
        // remove any

        // this section could be a second function that just takes the ids and grabs the rest of the data for better error handling

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
        // handle error
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

export async function getTrackData(trackIds: string[]) {
    const token = await getAPIToken()
    const selectionsString = trackIds.join(',')
    const url = 'https://api.spotify.com/v1/tracks/'

    const params = new URLSearchParams({
        ids: selectionsString,
        market: 'US',
    })

    const options = {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
    }

    try {
        const response = await fetch(url + '?' + params.toString(), options)

        // handle error

        const responseData = await response.json()

        const results = responseData.tracks?.map((track: any, idx: number) => {
            return {
                title: track.name,
                artist: track.artists[0].name,
                link: track.external_urls.spotify,
                spotifyId: track.id,
                artwork: track.album.images[1].url,
            }
        })

        return results
    } catch (error) {
        console.log(error)
    }
}
