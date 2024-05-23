import CTA from '@/components/home/CTA'
import Demo from '@/components/home/Demo'

export default async function Home() {
    console.log('this is home')
    const token = await fetch('http://localhost:3000/api/spotify/auth', {
        next: {revalidate: 3000}})
    console.log(await token.json())

    return (
        <main className="flex min-h-screen flex-row justify-evenly p-24">
            <CTA />
            <Demo />

        </main>
    )
}
