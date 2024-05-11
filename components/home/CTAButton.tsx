import { useRouter } from 'next/navigation'

import { Button } from '../ui/button'

export default function CTAButton() {
    const router = useRouter()
    return (
        <Button
            onClick={() => router.push('/generator')}
            initial={{ '--x': '100%', scale: 1 } as any}
            animate={{ '--x': '-100%' } as any}
            whileTap={{ scale: 0.92 }}
            transition={{
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1,
                type: 'spring',
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                    type: 'spring',
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1,
                },
            }}
            size="xl"
            className="radial-gradient group relative drop-shadow-md hover:bg-emerald-200/25"
            variant={'ghost'}
        >
            <span className="linear-mask relative block h-full w-full">
                start
            </span>
            <span className="linear-overlay absolute inset-0 block rounded-md p-px" />
            <span className="absolute h-1/5 w-2/3 rounded-xl blur-xl group-hover:-bottom-4 group-hover:right-12 group-hover:bg-emerald-400" />
            <span className="absolute h-1/5 w-1/3 rounded-xl blur-xl group-hover:-top-6 group-hover:left-20 group-hover:bg-emerald-200" />
        </Button>
    )
}
