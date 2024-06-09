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
import { cn } from '@/lib/utils'


export default function Navbar(){

    const links: MyLinks[] = [
        
        {
            text: 'Generator',
            href: '/generator',
            rel: '',
            target: '',
        },
        {
            text: 'Info',
            href: '/info',
            rel: '',
            target: '',
        },
        {
            text: 'Source Code',
            href: 'https://github.com/mgballou/playlist_me_2',
            rel: 'noopener noreferrer',
            target: 'blank',
        },
        
    ]

    return (
        <>
         <NavigationMenu>
                <NavigationMenuList className="space-x-2">
                    {links.map((link) => {
                        return (
                            <NavigationMenuItem key={link.text}>
                                <Link href={link.href} legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={cn(navigationMenuTriggerStyle(), 'bg-background/50 hover:bg-accent/50')}
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
        </>
    )
}