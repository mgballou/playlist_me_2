import path from 'path'
import fs from 'fs'

import { SlidesData } from '@/lib/types'
import DemoCarousel from './demo/DemoCarousel'

export default function Demo() {
    const filePath = path.join(process.cwd(), 'public', 'demoTracks.json')
    const jsonData = fs.readFileSync(filePath, 'utf8')
    const results: SlidesData = JSON.parse(jsonData)

    return (
        <div className="md:w-1/2 p-4 text-center max-h-3/4">
            <DemoCarousel slides={results.slides}/>
        </div>
    )
}
