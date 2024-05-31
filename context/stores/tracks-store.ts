import { createStore } from 'zustand/vanilla'

export type TracksState = {
    tracks: string[]
}

export type TracksActions = {
    addTrack: (track: string) => void
    removeTrack: (track: string) => void
}

export type TracksStore = TracksState & TracksActions

export const initTracksStore = (): TracksState => {
    return {tracks: []}
}

export const defaultInitState: TracksState = {
    tracks: [],
}

export const createTracksStore = (
    initState: TracksState = defaultInitState
) => {
    return createStore<TracksStore>()((set) => ({
        ...initState,
        addTrack: (track) =>
            set((state) => ({ tracks: [...state.tracks, track] })),
        removeTrack: (track) =>
            set((state) => ({
                tracks: state.tracks.filter((t) => t !== track),
            })),
    }))
}
