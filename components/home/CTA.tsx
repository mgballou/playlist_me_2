import { Button } from '../ui/button'

interface Props {
    props: any
}

export default function CTA() {
    return (
        <div className="my-auto w-1/2 p-4">
            <h1 className="text-3xl font-bold tracking-wide">
                A <span className="italic">better</span> playlist generator
            </h1>
            <p className="mt-2 text-xl">
                Create playlists. Discover new music. Revisit your favorites.
            </p>
            <div className="mt-8 space-x-4">
                <Button variant={'cta'} size={'xl'}>
                    start
                </Button>
                <Button variant={'secondary'} size={'xl'}>
                    info
                </Button>
            </div>
        </div>
    )
}
