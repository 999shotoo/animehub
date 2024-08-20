"use client";

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";

export function CustomCarousel(props: { data: any, sectionurl: string }) {
    console.log(props.sectionurl)
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    const popular = props.data.results;
    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full md:rounded-xl overflow-hidden"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {popular.map((popular: any, index: any) => (
                    <CarouselItem key={index}>
                        <section className={`relative h-[45vh] w-full overflow-hidden md:rounded-xl bg-cover bg-center`}
                            style={{
                                backgroundImage: `url(${popular.cover})`,
                            }}>
                            {/* <img src="" alt="Hero Anime"  className="object-cover" /> */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 px-4 sm:px-6 md:px-8 lg:px-10">
                                <div className="max-w-2xl">
                                    <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                                        {popular.title.english}
                                    </h1>
                                    <p className="mt-4 text-lg text-white sm:text-xl md:text-2xl"
                                        dangerouslySetInnerHTML={{
                                            __html: popular.description.slice(0, 100) + "...",
                                        }}
                                        >
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <Link href={`/${props.sectionurl}/info/${popular.id}`}>
                                    <Button>
                                        <Plus className="mr-2 h-5 w-5" />
                                        Watch Now
                                    </Button>
                                    </Link>
                                    <Button variant="outline">
                                        <Plus className="mr-2 h-5 w-5" />
                                        Add to List
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    )
}
