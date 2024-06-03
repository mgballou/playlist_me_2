import CTA from '@/components/home/CTA'
import Demo from '@/components/home/Demo'

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-row justify-evenly p-24">
            <CTA />
            <Demo />
        </main>
    )
}
