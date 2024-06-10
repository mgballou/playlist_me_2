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

    const animationDuration = 2;
    const animationDelay = 0.3;

    return (<div className="w-1/2 p-4 text-center">
        <Input tracks={results.slides[0].input} animationDuration={animationDuration}
                animationDelay={animationDelay}/>
        <Arrow/>
        <Output tracks={results.slides[0].output} animationDuration={animationDuration}
                animationDelay={animationDelay}/>
    </div>)
}
