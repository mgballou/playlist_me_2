import fs from 'fs'
import path from 'path'

export function writeJSON(data: any) {
    const jsonData = JSON.stringify(data, null, 2)
    const filePath = path.join(process.cwd(), 'public', 'trackData.json')

    fs.writeFileSync(filePath, jsonData, 'utf8')
}
