import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export async function GET() {
    console.log(`It is currently ${new Date()} and a request was made for a new auth token.`)
    const clientId = process.env.SPOTIFY_CLIENT_ID
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

    const url = `https://accounts.spotify.com/api/token`
    const body = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
    } as any)

    const authOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            cache: 'no-store',
        },
        body: body.toString(),
        
    }

    try {
        const res = await fetch(url, authOptions)

        if (!res.ok) {
            const errorData = await res.text()
            console.error(`Error fetching token: ${res.status} - ${errorData}`)
            return new Response(
                JSON.stringify({ message: 'Failed to fetch token' }),
                { status: res.status }
            )
        }

        const token = await res.json()
        console.log(token)

        return new Response(JSON.stringify(token.access_token), { status: 200 })
    } catch (error) {
        console.error('Error during token fetch:', error)
        return new Response(
            JSON.stringify({ message: 'Internal Server Error' }),
            { status: 500 }
        )
    }
}
