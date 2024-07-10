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
            <Breadcrumb className='my-2'>
                <BreadcrumbList>
                    {links.map((link, idx) => {
                        const url = '/generator/g/' + link.toLowerCase()

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
