'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { type StoreApi, useStore } from 'zustand'

import {
    type AdjustmentsStore,
    createAdjustmentsStore,
    initAdjustmentsStore,
} from '../stores/adjustments-store'

export const AdjustmentsStoreContext =
    createContext<StoreApi<AdjustmentsStore> | null>(null)

export interface AdjustmentsStoreProviderProps {
    children: ReactNode
}

export const AdjustmentsStoreProvider = ({
    children,
}: AdjustmentsStoreProviderProps) => {
    const storeRef = useRef<StoreApi<AdjustmentsStore>>()
    if (!storeRef.current) {
        storeRef.current = createAdjustmentsStore(initAdjustmentsStore())
    }

    return (
        <AdjustmentsStoreContext.Provider value={storeRef.current}>
            {children}
        </AdjustmentsStoreContext.Provider>
    )
}


export const useAdjustmentsStore = <T,>(selector: (store: AdjustmentsStore) => T): T => {
    const adjustmentsStoreContext = useContext(AdjustmentsStoreContext)

    if (!adjustmentsStoreContext) {
        throw new Error ('useAdjustmentsStore must be used within AdjustmentsStoreProvider')
    }
    return useStore(adjustmentsStoreContext, selector)
}