'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { MyLinks } from '@/lib/types'
import Link from 'next/link'


export default function Footer() {
    const links: MyLinks[] = [
        {
            text: 'Info',
            href: '/info',
            rel: '',
            target: '',
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/mballou/',
            rel: 'noopener noreferrer',
            target: 'blank',
        },
        {
            text: 'Github',
            href: 'https://github.com/mgballou',
            rel: 'noopener noreferrer',
            target: 'blank',
        },
        {
            text: 'Ko-fi',
            href: 'https://ko-fi.com/matthewballou',
            rel: 'noopener noreferrer',
            target: 'blank',
        },
    ]

    return (
        <div className="flex h-20 w-full flex-col items-center border-t-4 border-emerald-400 p-4">
            <NavigationMenu>
                <NavigationMenuList className="space-x-8">
                    {links.map((link) => {
                        return (
                            <NavigationMenuItem key={link.text}>
                                <Link href={link.href} legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                        rel={link.rel}
                                        target={link.target}
                                    >
                                        {link.text}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        )
                    })}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
