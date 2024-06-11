import CTA from '@/components/home/CTA'
import Demo from '@/components/home/Demo'

export default async function Home() {
    return (
        <section className="flex flex-row justify-evenly px-16 py-20">
            <CTA />

            <Demo />
        </section>
    )
}
