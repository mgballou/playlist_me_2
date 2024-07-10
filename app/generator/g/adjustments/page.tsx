'use client'

import FeatureSlider from '@/components/generator/FeatureSlider'
import { Button } from '@/components/ui/button'
import { useAdjustmentsStore } from '@/context/providers/adjustments-store-provider'
import { Feature } from '@/lib/types'
import { useRef, useState, useCallback, useEffect } from 'react'

export default function Adjustments() {
    const features: Feature[] = [
        'acousticness',
        'liveness',
        'danceability',
        'energy',
        'instrumentalness',
    ]

    const { adjustments, setAdjustments } = useAdjustmentsStore(
        (state) => state
    )

    const initialActiveFeatures = {
        acousticness: !!adjustments.acousticness,
        liveness: !!adjustments.liveness,
        danceability: !!adjustments.danceability,
        energy: !!adjustments.energy,
        instrumentalness: !!adjustments.instrumentalness,
    }

    const initialFeatureValues = {
        acousticness: [adjustments.acousticness ? adjustments.acousticness : 0],
        liveness: [adjustments.liveness ? adjustments.liveness : 0],
        danceability: [adjustments.danceability ? adjustments.danceability : 0],
        energy: [adjustments.energy ? adjustments.energy : 0],
        instrumentalness: [
            adjustments.instrumentalness ? adjustments.instrumentalness : 0,
        ],
    }

    const [activeFeatures, setActiveFeatures] = useState(initialActiveFeatures)
    const [featureValues, setFeatureValues] = useState(initialFeatureValues)

    const activeFeaturesRef = useRef(activeFeatures)
    const featureValuesRef = useRef(featureValues)
    const saveAdjustmentsRef = useRef<() => void>(() => {})

    const toggleFeature = useCallback((feature: Feature) => {
        setActiveFeatures((prevFeatures) => ({
            ...prevFeatures,
            [feature]: !prevFeatures[feature],
        }))
    }, [])

    const updateValue = useCallback((feature: Feature, value: number[]) => {
        setFeatureValues((prevValues) => ({ ...prevValues, [feature]: value }))
    }, [])

    const saveAdjustments = useCallback(() => {
        const newAdjustments: Partial<Record<Feature, number>> = {}

        const currentActiveFeatures = activeFeaturesRef.current
        const currentFeatureValues = featureValuesRef.current

        for (const feature of features) {
            if (currentActiveFeatures[feature]) {
                newAdjustments[feature] = currentFeatureValues[feature][0]
            }
        }

        setAdjustments(newAdjustments)
    }, [features, setAdjustments])

    const handleReset = useCallback(() => {
        setActiveFeatures({
            acousticness: false,
            liveness: false,
            danceability: false,
            energy: false,
            instrumentalness: false,
        })
        setFeatureValues({
            acousticness: [0],
            liveness: [0],
            danceability: [0],
            energy: [0],
            instrumentalness: [0],
        })
        setAdjustments({})
    }, [setAdjustments])

    useEffect(() => {
        activeFeaturesRef.current = activeFeatures
    }, [activeFeatures])

    useEffect(() => {
        featureValuesRef.current = featureValues
    }, [featureValues])

    useEffect(() => {
        saveAdjustmentsRef.current = saveAdjustments
    }, [saveAdjustments])

    // Sync on component unmount
    useEffect(() => {
        return () => {
            saveAdjustmentsRef.current()
        }
    }, [])

    return (
        <main className="col-span-3 h-[90vh] flex flex-col gap-6 p-2">
            <div className="flex flex-row justify-center gap-4">
                <Button onClick={saveAdjustments} variant={'app1'}>Save</Button>
                <Button onClick={handleReset} variant={'app2'}>Reset to Default</Button>
            </div>
            <div className="flex h-full w-full flex-col gap-8 overflow-scroll bg-slate-600">
                {features?.map((feature) => {
                    return (
                        <FeatureSlider
                            key={feature}
                            feature={feature}
                            isActive={activeFeatures[feature]}
                            toggleFeature={toggleFeature}
                            value={featureValues[feature]}
                            updateValue={updateValue}
                        />
                    )
                })}
            </div>
        </main>
    )
}
