import { Feature } from '@/lib/types'
import { createStore } from 'zustand/vanilla'

export type AdjustmentsState = {
    adjustments: Partial<Record<Feature, number>>
}

export type AdjustmentsActions = {
    setAdjustments: (adjustments: Partial<Record<Feature, number>>) => void
}

export type AdjustmentsStore = AdjustmentsState & AdjustmentsActions

export const initAdjustmentsStore = (): AdjustmentsState => {
    return { adjustments: {} }
}

export const defaultInitState: AdjustmentsState = {
    adjustments: {},
}

export const createAdjustmentsStore = (
    initState: AdjustmentsState = defaultInitState
) => {
    return createStore<AdjustmentsStore>()((set) => ({
        ...initState,
        setAdjustments: (adjustments) => set((state) => ({ adjustments })),
    }))
}
