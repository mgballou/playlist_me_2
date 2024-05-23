export interface SpotifyTrack {
    tName: string
    tArtist: string
    tLink: string
    spotifyId: string
    albumArtwork: string
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