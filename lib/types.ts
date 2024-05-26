export interface SpotifyTrack {
    title: string
    artist: string
    link: string
    spotifyId: string
    artwork: string
    acousticness: number
    liveness: number
    danceability: number
    energy: number
    instrumentalness: number
}

export interface SpotifyToken {
    access_token: string
    token_rype: string
    expires_in: number
}

export type TrackCardVariant = 'search' | 'selection' | 'result'