import { ReactNode } from 'react'
import { Button } from '../ui/button'
import CTAButton from './CTAButton'
import InfoButton from './InfoButton'

export default function CTA() {
    return (
        <div className=" flex h-screen flex-col items-center justify-center p-4 md:w-1/2 ">
            <div className="">
                <h1 className="text-3xl font-bold tracking-wide">
                    A <span className="italic text-emerald-400">better</span>{' '}
                    playlist generator
                </h1>
                <p className="mt-2 text-xl">
                    Create playlists. Discover new music. Revisit your
                    favorites.
                </p>
                <div className="mt-8 space-x-4">
                    <CTAButton />
                    <InfoButton />
                </div>
            </div>
        </div>
    )
}
