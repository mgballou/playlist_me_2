export default function GeneratorLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <div className="w-full text-center text-sm">Subnav goes here</div>

            <div className="flex flex-row">
                <div className="w-1/3 border border-red-500">Sidebar goes here</div>
                <div className="w-2/3 border border-red-500">
                    {/* children are search, adjustments, results */}
                    {children}
                </div>
            </div>
        </>
    )
}
