'use client'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

import { RefObject, useEffect, useRef, useState } from 'react'

function Purpose() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Purpose</CardTitle>
                <CardDescription>
                    Finding a better way to discover and catalog music with
                    shared qualities.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-5">
                <p>
                    Playlist.me exists to solve a problem I faced personally. In
                    my spare time, I work on a variety of creative projects,
                    including fiction writing and game design.
                </p>
                <p>
                    A huge part of my creative process is music. I use certain
                    songs to help me focus and stay motivated, but I also use
                    playlists to represent a certain atmosphere or to embody a
                    certain character.
                </p>
                <p>
                    I wanted a way to rapidly discover new tracks that matched
                    the vibe of ones I had already selected for a certain
                    purpose. But, if those songs didn&apos;t necessarily match
                    my everyday taste in music, Spotify&apos;s recommendation
                    engine left a lot to be desired.
                </p>
            </CardContent>
        </Card>
    )
}

function Project() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Project</CardTitle>
                <CardDescription>
                    Utilizing the most modern implementations of the tools I
                    really enjoy.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-5">
                <p>
                    Across my recent personal projects, I&apos;ve been searching
                    for a set of technologies that I felt excited to use every
                    time. For Playlist.me, I hoped to settle into a tech stack
                    that I&apos;d feel comfortable continuing to use for my next
                    several projects.
                </p>
                <p>
                    React has been my preference for some time, but before this,
                    hadn&apos;t yet dived into Next.js, and saw this as an
                    excellent opportunity. Adapting to the tight coupling of
                    server and client while still working in a paradigm I mesh
                    with was the right blend of comfort and challenge.
                </p>
                <p>
                    In the past I&apos;ve worked with a variety of CSS solutions
                    and component libraries. The utility-first approach of
                    Tailwind is something I love, but I also enjoy libraries
                    like Chakra UI for well-designed components. When I
                    discovered shadcn/ui, built on top of Radix and Tailwind, I
                    was immediately sold.
                </p>
                <p></p>
            </CardContent>
        </Card>
    )
}

function Process() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Process</CardTitle>
                <CardDescription>
                    Continually nurturing a seed of an idea, iterating and
                    refining a product.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-5">
                <p>
                    I built the initial version of Playlist.me over a year ago.
                    I was still in the midst of a coding bootcamp and had just
                    been exposed to React for the first time. My understanding
                    and my ability were extremely limited, but I was motivated
                    to push through. After about two weeks of work, I had
                    something that was functional, but far from beautiful,
                    polished, or impressive.
                </p>
                <p>
                    I couldn&apos;t say that I was truly happy with what I had
                    put together, but at the same time I was proud of what was
                    my first ever functional web application. I moved on to
                    other projects, but could never shake a nagging feeling that
                    Playlist.me could grow to be more than what it initially
                    was.
                </p>
                <p>
                    Even now, I still see lots of ways that this application
                    could be improved. I&apos;ll consider it to be in active
                    development for some time yet, because this project means a
                    lot to me. That being said, the differences between v1 and
                    v2 are evidence of just how much I&apos;ve progressed as an
                    engineer.
                </p>
            </CardContent>
        </Card>
    )
}

export default function Info() {
    return (
        <section className="flex h-full flex-col items-center p-6 md:p-12">
            <Tabs
                defaultValue="purpose"
                className="flex max-w-[768px] flex-col items-center gap-2 md:gap-4"
            >
                <TabsList>
                    <TabsTrigger value="purpose">Purpose</TabsTrigger>
                    <TabsTrigger value="project">Project</TabsTrigger>
                    <TabsTrigger value="process">Process</TabsTrigger>
                </TabsList>
                <TabsContent value="purpose">
                    <Purpose />
                </TabsContent>
                <TabsContent value="project">
                    <Project />
                </TabsContent>
                <TabsContent value="process">
                    <Process />
                </TabsContent>
            </Tabs>
        </section>
    )
}
