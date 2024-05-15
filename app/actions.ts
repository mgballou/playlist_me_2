'use server'
import { cookies } from 'next/headers'

import axios from 'axios'

interface SpotifyToken {
    access_token: string
    token_rype: string
    expires_in: number
}

export async function getAPIToken() {
    const clientId = process.env.SPOTIFY_CLIENT_ID
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

    const authOptions = {
        url: `https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    }

    try {
        const response = await axios(authOptions)

        if (response.statusText !== 'OK') {
            throw new Error(response.data.error)
        }

        const token = response.data

        cookies().set('spotify_token', token.access_token, {
            maxAge: token.expires_in,
        })

        return cookies().get('spotify_token')?.value
    } catch (error) {
        console.log(error)
    }
}

export async function getTrackData(tracks: string[]) {
    const token = cookies().get('spotify_token')?.value ?? (await getAPIToken())
    console.log(token)

    const url = 'https://api.spotify.com/v1/recommendations'

    const selectionsString = tracks.join(',')

    // TODO: remove any
    const params = new URLSearchParams({
        limit: 5,
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
        // TODO: completely restructure object remapping
        // remove any
        const results = responseData.tracks?.map((track: any) => {
            return {
                tName: track.name,
                tArtist: track.artists[0].name,
                tLink: track.external_urls.spotify,
                spotifyId: track.id,
                albumArtwork: track.album.images[1].url,
            }
        })
        console.log(results)
        return results
    } catch (error) {
        console.log(error)
    }
}
