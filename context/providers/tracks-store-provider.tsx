'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { type StoreApi, useStore } from 'zustand'

import {
    type TracksStore,
    createTracksStore,
    initTracksStore,
} from '../stores/tracks-store'

export const TracksStoreContext = createContext<StoreApi<TracksStore> | null>(
    null
)

export interface TracksStoreProviderProps {
    children: ReactNode
}

export const TracksStoreProvider = ({ children }: TracksStoreProviderProps) => {
    const storeRef = useRef<StoreApi<TracksStore>>()
    if (!storeRef.current) {
        storeRef.current = createTracksStore(initTracksStore())
    }

    return (
        <TracksStoreContext.Provider value={storeRef.current}>
            {children}
        </TracksStoreContext.Provider>
    )
}

export const useTracksStore = <T,>(selector: (store: TracksStore) => T): T => {
    const tracksStoreContext = useContext(TracksStoreContext)

    if (!tracksStoreContext) {
        throw new Error(
            'useTracksStore must be used within TracksStoreProvider'
        )
    }

    return useStore(tracksStoreContext, selector)
}
