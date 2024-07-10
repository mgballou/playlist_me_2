'use-client'

import { FeatureSliderProps } from "@/lib/types"

import { Slider } from "../ui/slider"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"
import { useCallback } from "react"

export default function FeatureSlider({
    feature,
    isActive,
    toggleFeature,
    value,
    updateValue,
}: FeatureSliderProps) {

    const handleChange = useCallback((value: number[]) => {
        updateValue(feature, value)
    }, [feature, updateValue])

    const handleToggle = useCallback(() => {
        toggleFeature(feature)
    }, [feature, toggleFeature])

    return (
        <div className="text-center border-2 bg-slate-500/25 py-2">
            <Label className="text-xl md:text-2xl">{feature.toUpperCase()}</Label>
            <div className="flex w-full flex-row justify-evenly gap-4">
                <Slider value={value} onValueChange={handleChange} disabled={!isActive} className="w-1/2" />
                <p>{value}</p>
                <Switch
                    checked={isActive}
                    onCheckedChange={handleToggle}
                />
            </div>
        </div>
    )
}