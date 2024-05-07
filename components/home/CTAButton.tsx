import { Button } from '../ui/button'

export default function CTAButton() {
    return (
        <Button
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
            className="radial-gradient relative hover:bg-teal-200/10"
            variant={'ghost'}
        >
            <span className="linear-mask relative block h-full w-full">
                start
            </span>
            <span className="linear-overlay absolute inset-0 block rounded-md p-px" />
        </Button>
    )
}
