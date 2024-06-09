import CTA from '@/components/home/CTA'
import Demo from '@/components/home/Demo'

export default async function Home() {
    return (
        <section className="flex flex-row justify-evenly p-24">
            <CTA />
            <Demo />
        </section>
    )
}
