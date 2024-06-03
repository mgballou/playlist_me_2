'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Fragment } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '../ui/breadcrumb'

export default function Subnav() {
    const pathname = usePathname()

    const links = ['Search', 'Adjustments', 'Results']

    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    {pathname === '/generator' ? (
                        <BreadcrumbPage>Generator</BreadcrumbPage>
                    ) : (
                        <BreadcrumbLink asChild>
                            <Link href={'/generator'}>Generator</Link>
                        </BreadcrumbLink>
                    )}

                    <BreadcrumbSeparator />
                    {links.map((link, idx) => {
                        const url = '/generator/' + link.toLowerCase()

                        return (
                            <Fragment key={idx}>
                                <BreadcrumbItem>
                                    {url === pathname ? (
                                        <BreadcrumbPage>{link}</BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink asChild>
                                            <Link href={url}>{link}</Link>
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                                {idx !== links.length - 1 && (
                                    <BreadcrumbSeparator />
                                )}
                            </Fragment>
                        )
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </>
    )
}
