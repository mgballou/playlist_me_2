import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const revalidate = 3600

export async function GET() {
    // const existingToken = cookies().get('spotify-token')?.value

    // if (existingToken) {
    //     return new Response(JSON.stringify(existingToken), { status: 200 })
    // }

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
        },
        body: body.toString(),
    }

    try {
        const res = await fetch(url, authOptions,)

        if (!res.ok) {
            const errorData = await res.text()
            console.error(`Error fetching token: ${res.status} - ${errorData}`)
            return new Response(
                JSON.stringify({ message: 'Failed to fetch token' }),
                { status: res.status }
            )
        }

        const token = await res.json()

        // cookies().set('spotify_token', token.access_token, {
        //     maxAge: token.expires_in,
        // })

        return new Response(JSON.stringify(token.access_token), { status: 200 })
    } catch (error) {
        console.error('Error during token fetch:', error)
        return new Response(
            JSON.stringify({ message: 'Internal Server Error' }),
            { status: 500 }
        )
    }
}

// export async function GET(request: Request) {
//     redirect('https://nextjs.org/')
//   }
