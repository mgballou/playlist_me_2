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
        <main className="flex h-full flex-grow w-full flex-col gap-6 p-4">
            <div className="flex flex-row gap-4">
                <form className="inline-flex w-full" onSubmit={handleSearch}>
                    <Input
                        type="search"
                        name="query"
                        value={formData.query}
                        onChange={handleFormChange}
                        placeholder="find tracks..."
                        className=""
                    />

                    <Button type="submit">Search</Button>
                </form>
                <Button onClick={() => setSearchResults([])}>Clear</Button>
            </div>

            <div className="flex min-h-full w-full flex-row flex-wrap justify-center gap-2 bg-slate-600 overflow-scroll">
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
