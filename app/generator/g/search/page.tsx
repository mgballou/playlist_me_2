'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { getSearchResults } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SpotifyTrack } from '@/lib/types'
import TrackCard from '@/components/shared/TrackCard'

export const dynamic = 'force-dynamic'

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
        <section className="col-span-3 flex h-[90vh] w-full flex-col gap-6 p-2">
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

                    <Button type="submit" variant={'app1'} size={'sm'}>
                        Search
                    </Button>
                </form>
                <Button
                    onClick={() => setSearchResults([])}
                    variant={'app2'}
                    size={'sm'}
                >
                    Clear
                </Button>
            </div>

            <div className="flex h-full w-full flex-row flex-wrap justify-center gap-2 overflow-scroll bg-slate-600">
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
        </section>
    )
}
