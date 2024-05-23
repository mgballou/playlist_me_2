import CTA from '@/components/home/CTA'
import Demo from '@/components/home/Demo'
import { getAPIToken } from './actions'

export default async function Home() {
    console.log('this is home')
    const token = await getAPIToken()

    return (
        <main className="flex min-h-screen flex-row justify-evenly p-24">
            <CTA />
            <Demo />

        </main>
    )
}
