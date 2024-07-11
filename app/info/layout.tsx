export default function InfoLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <div className="flex flex-grow flex-col h-full">{children}</div>
}