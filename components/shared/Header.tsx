import Link from 'next/link'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div className="flex w-full flex-col items-center gap-2 bg-gradient-to-br from-transparent from-55% via-indigo-700 via-60% to-emerald-400/70 to-90% p-4 md:flex-row md:justify-between md:gap-0">
            <Link
                href={'/'}
                className="px-2 text-lg font-semibold decoration-indigo-400 hover:bg-slate-100/25 hover:text-indigo-400 hover:underline focus:bg-slate-100/25 focus:text-indigo-400 focus:underline"
            >
                Playlist.me
            </Link>
            <Navbar />
        </div>
    )
}
