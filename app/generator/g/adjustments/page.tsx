'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Adjustments(){

    return (
        <main className="flex h-[90vh] w-full flex-col gap-6 p-4">
            <div className="flex flex-row justify-center gap-4">
                <Button>Reset to Default</Button>
            </div>
            <div className="flex flex-row flex-wrap gap-2 min-h-full w-full bg-slate-600 overflow-scroll">
                <Input type="range" className="w-2/5">



                </Input>
                <Input type="range" className="w-2/5">



                </Input>
                <Input type="range" className="w-2/5">



                </Input>
                <Input type="range" className="w-2/5">



                </Input>
                <Input type="range" className="w-2/5">



                </Input>
            </div>


        </main>
    )
}