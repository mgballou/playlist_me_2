'use-client'

import { FeatureSliderProps } from "@/lib/types"

import { Slider } from "../ui/slider"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"

export default function FeatureSlider({
    feature,
    isActive,
    toggleFeature,
    value,
    updateValue,
}: FeatureSliderProps) {

    function handleChange(value: number[]){
        updateValue(feature, value)
    }

    return (
        <div className="text-center">
            <Label className="text-2xl">{feature.toUpperCase()}</Label>
            <div className="flex w-full flex-row justify-evenly gap-4">
                <Slider value={value} onValueChange={handleChange} disabled={!isActive} className="w-1/2" />
                <p>{value}</p>
                <Switch
                    checked={isActive}
                    onCheckedChange={() => toggleFeature(feature)}
                />
            </div>
        </div>
    )
}