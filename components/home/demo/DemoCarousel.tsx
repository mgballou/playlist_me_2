'use client'

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { Slide } from '@/lib/types'
import Input from './Input'
import Arrow from './Arrow'
import Output from './Output'
import { useEffect, useRef, useState } from 'react'
import { TracksStoreProvider } from '@/context/providers/tracks-store-provider'

interface Props {
    slides: Slide[]
}

export default function DemoCarousel({ slides }: Props) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [visibleSlides, setVisibleSlides] = useState<number[]>([])

    const plugin1 = useRef(
        Autoplay({
            delay: 8000,
        })
    )

    const plugin2 = useRef(Fade())

    const animationDuration = 2
    const animationDelay = 0.3

    useEffect(() => {
        if (!api){
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
          })

        api.on('slidesInView', () => {
            setVisibleSlides(api.slidesInView())
        })


    }, [api])

    return (
        <Carousel
            setApi={setApi}
            opts={{ loop: true, inViewThreshold: 0.5, }}
            plugins={[plugin1.current, plugin2.current]}
        >
            <CarouselContent>
            <TracksStoreProvider>
                {slides.map((slide, idx) => {
                    return (
                        <CarouselItem key={idx}>
                            <Input
                                tracks={slide.input}
                                animationDuration={animationDuration}
                                animationDelay={animationDelay}
                                isVisible={visibleSlides.includes(idx)}
                            />
                            <Arrow isVisible={visibleSlides.includes(idx)} />
                            <Output
                                tracks={slide.output}
                                animationDuration={animationDuration}
                                animationDelay={animationDelay}
                                isVisible={visibleSlides.includes(idx)}
                            />
                        </CarouselItem>
                    )
                })}
            </TracksStoreProvider>
            </CarouselContent>
        </Carousel>
    )
}
