'use server'

import axios from 'axios'

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

        return response.data
    } catch (error) {
        console.log(error)
    }
}
