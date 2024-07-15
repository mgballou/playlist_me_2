'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

export default function InfoButton() {
    const router = useRouter()

    return (
        <>
            <Button
                className="hover:bg-emerald-200/25"
                variant={'outline'}
                size={'xl'}
                onClick={() => router.push('/info')}
            >
                info
            </Button>
        </>
    )
}
