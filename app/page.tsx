import CTA from '@/components/home/CTA'
import Demo from '@/components/home/Demo'

export default async function Home() {
    return (
        <section className="flex w-full flex-col items-center justify-evenly px-8 py-10 md:flex-row md:items-start md:px-16 md:py-20">
            <CTA />

            <Demo />
        </section>
    )
}
