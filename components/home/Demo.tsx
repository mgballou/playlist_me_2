import path from 'path'
import fs from 'fs'


import Arrow from "./demo/Arrow";
import Input from "./demo/Input";
import Output from "./demo/Output";
import { SlidesData } from '@/lib/types';

export default function Demo() {

    const filePath = path.join(process.cwd(), 'public', 'demoTracks.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const results: SlidesData = JSON.parse(jsonData);

    return (<div className="w-1/2 p-4 text-center">
        <Input tracks={results.slides[0].input}/>
        <Arrow/>
        <Output tracks={results.slides[0].output}/>
    </div>)
}
