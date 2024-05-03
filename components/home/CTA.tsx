import { Button } from '../ui/button'

interface Props {
    props: any
}

export default function CTA() {
    return (
        <div className="w-1/2 p-4 my-auto">
            <h1 className="text-3xl font-bold tracking-wide">
                A <span className="italic">better</span> playlist generator
            </h1>
            <p className="text-xl mt-2">
                Create playlists. Discover new music. Revisit your favorites.
            </p>
            <div className='space-x-4 mt-8'>
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
