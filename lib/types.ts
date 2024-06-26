export interface SpotifyTrack {
    title: string
    artist: string
    link: string
    spotifyId: string
    artwork: string
    acousticness?: number
    liveness?: number
    danceability?: number
    energy?: number
    instrumentalness?: number
}

export interface SpotifyToken {
    access_token: string
    token_rype: string
    expires_in: number
}

export type TrackCardVariant = 'search' | 'selection' | 'result' | 'demo'


export type Feature = 'acousticness' | 'liveness' | 'danceability' | 'energy' | 'instrumentalness';

export interface FeatureSliderProps {
    feature: Feature
    isActive: boolean
    toggleFeature: (feature: Feature) => void;
    value: number[]
    updateValue: (feature: Feature, value: number[]) => void
}


export interface MyLinks {
    text: string
    href: string
    rel: string
    target: string
}


export interface Slide {
    input: SpotifyTrack[];
    output: SpotifyTrack[];
  }
  
export interface SlidesData {
    slides: Slide[];
  }