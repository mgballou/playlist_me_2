import { redirect } from 'next/navigation'

export async function GET(){
    redirect('/generator/g/search')
}