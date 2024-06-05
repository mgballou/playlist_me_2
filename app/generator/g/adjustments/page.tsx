'use client'

import FeatureSlider from '@/components/generator/FeatureSlider'
import { Button } from '@/components/ui/button'
import { useAdjustmentsStore } from '@/context/providers/adjustments-store-provider'
import { Feature } from '@/lib/types'

import { useEffect, useState } from 'react'



export default function Adjustments() {
    const features: Feature[] = [
        'acousticness',
        'liveness',
        'danceability',
        'energy',
        'instrumentalness',
    ]

    const { setAdjustments } = useAdjustmentsStore((state) => state)

    const [activeFeatures, setActiveFeatures] = useState<
        Record<Feature, boolean>
    >({
        acousticness: false,
        liveness: false,
        danceability: false,
        energy: false,
        instrumentalness: false,
    })

    const [featureValues, setFeatureValues] = useState<Record<Feature, number[]>>(
        {
            acousticness: [0],
            liveness:[0],
            danceability: [0],
            energy: [0],
            instrumentalness: [0],
        }
    )

    function toggleFeature(feature: Feature) {
        setActiveFeatures((prevFeatures) => ({
            ...prevFeatures,
            [feature]: !prevFeatures[feature],
        }))
    }

    function updateValue(feature: Feature, value: number[]) {
        setFeatureValues((prevValues) => ({ ...prevValues, [feature]: value }))
    }

    function saveAdjustments(){
        const adjustments: Partial<Record<Feature, number>> = {};

        for (const feature of features) {
            if (activeFeatures[feature]) {
                adjustments[feature] = featureValues[feature][0];
            }
        }

        setAdjustments(adjustments);

    }

    useEffect(() => {
        // Sync on component unmount
        return () => {
            saveAdjustments();
        };
    }, []);

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
