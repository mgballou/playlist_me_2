'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { getSearchResults } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SpotifyTrack } from '@/lib/types'
import TrackCard from '@/components/shared/TrackCard'

export default function Search() {
    const [formData, setFormData] = useState({
        query: '',
    })

    const [searchResults, setSearchResults] = useState<SpotifyTrack[]>([])

    function handleFormChange(evt: ChangeEvent<HTMLInputElement>) {
        setFormData({ query: evt.target.value })
    }

    async function handleSearch(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault()
        const results: SpotifyTrack[] = await getSearchResults(formData.query)
        setSearchResults(results)
    }

    return (
        <main className="flex min-h-screen w-full flex-col justify-evenly p-12">
            <form className="inline-flex" onSubmit={handleSearch}>
                <Input
                    type="search"
                    name="query"
                    value={formData.query}
                    onChange={handleFormChange}
                    placeholder="find tracks..."
                />

                <Button type="submit">Search</Button>
            </form>

            <div className="inset-4 flex min-h-60 w-full flex-row flex-wrap justify-center gap-2 bg-slate-600 p-4">
                {searchResults?.map((track, idx) => {
                    return (
                        <TrackCard
                            key={'search' + track.spotifyId}
                            track={track}
                            variant={'search'}
                        />
                    )
                })}
            </div>
        </main>
    )
}
