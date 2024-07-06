import path from 'path'
import fs from 'fs'

import { SlidesData } from '@/lib/types'
import DemoCarousel from './demo/DemoCarousel'

export default function Demo() {
    const filePath = path.join(process.cwd(), 'public', 'demoTracks.json')
    const jsonData = fs.readFileSync(filePath, 'utf8')
    const results: SlidesData = JSON.parse(jsonData)

    return (
        <div className="max-h-3/4 p-4 text-center md:w-1/2">
            <DemoCarousel slides={results.slides} />
        </div>
    )
}
