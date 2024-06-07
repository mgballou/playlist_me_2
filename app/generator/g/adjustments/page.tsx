'use client'

import FeatureSlider from '@/components/generator/FeatureSlider'
import { Button } from '@/components/ui/button'
import { useAdjustmentsStore } from '@/context/providers/adjustments-store-provider'
import { Feature } from '@/lib/types'

import { useEffect, useRef, useState } from 'react'

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

    const [activeFeatures, setActiveFeatures] = useState<
        Record<Feature, boolean>
    >({
        acousticness: !!adjustments.acousticness,
        liveness: !!adjustments.liveness,
        danceability: !!adjustments.danceability,
        energy: !!adjustments.energy,
        instrumentalness: !!adjustments.instrumentalness,
    })

    const [featureValues, setFeatureValues] = useState<
        Record<Feature, number[]>
    >({
        acousticness: [adjustments.acousticness ? adjustments.acousticness : 0],
        liveness: [adjustments.liveness ? adjustments.liveness : 0],
        danceability: [adjustments.danceability ? adjustments.danceability : 0],
        energy: [adjustments.energy ? adjustments.energy : 0],
        instrumentalness: [
            adjustments.instrumentalness ? adjustments.instrumentalness : 0,
        ],
    })
    const activeFeaturesRef = useRef(activeFeatures);
    const featureValuesRef = useRef(featureValues);


    function toggleFeature(feature: Feature) {
        setActiveFeatures((prevFeatures) => ({
            ...prevFeatures,
            [feature]: !prevFeatures[feature],
        }))
    }

    function updateValue(feature: Feature, value: number[]) {
        setFeatureValues((prevValues) => ({ ...prevValues, [feature]: value }))
    }

    function saveAdjustments() {
        const newAdjustments: Partial<Record<Feature, number>> = {}

        const currentActiveFeatures = activeFeaturesRef.current;
        const currentFeatureValues = featureValuesRef.current;

        for (const feature of features) {
            if (currentActiveFeatures[feature]) {
                newAdjustments[feature] = currentFeatureValues[feature][0];
            }
        }
        
        setAdjustments(newAdjustments)
        
        
    }

    // Update refs whenever state changes
    useEffect(() => {
        activeFeaturesRef.current = activeFeatures;
    }, [activeFeatures]);

    useEffect(() => {
        featureValuesRef.current = featureValues;
    }, [featureValues]);

    useEffect(() => {
        // Sync on component unmount
        return () => {
            saveAdjustments()
        }
    }, [])

    return (
        <main className="flex h-[90vh] w-full flex-col gap-6 p-4">
            <div className="flex flex-row justify-center gap-4">
                <Button onClick={() => saveAdjustments()}>Save</Button>
                <Button>Reset to Default</Button>
            </div>
            <div className="flex min-h-full w-full flex-col gap-8 overflow-scroll bg-slate-600">
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
