"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

export function CustomCarousel(props: { data: any }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const popular = props.data.results;
  const [imagesLoaded, setImagesLoaded] = React.useState<boolean[]>(
    new Array(popular.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full md:rounded-xl overflow-hidden"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {popular.map((popular: any, index: number) => (
          <CarouselItem key={index}>
            <section className="relative h-[45vh] w-full overflow-hidden md:rounded-xl bg-cover bg-center">
              {!imagesLoaded[index] && (
                <Skeleton className="absolute inset-0" />
              )}
              <Image
                src={popular.cover}
                alt={`Cover for ${popular.title.english}`}
                layout="fill"
                objectFit="cover"
                onLoad={() => handleImageLoad(index)}
                className={imagesLoaded[index] ? "opacity-100" : "opacity-0"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="max-w-2xl">
                  {imagesLoaded[index] ? (
                    <>
                      <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        {popular.title.english ||
                          popular.title.native ||
                          popular.title.romaji}
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate overflow-hidden max-w-full">
                        {popular.description}
                      </p>
                    </>
                  ) : (
                    <>
                      <Skeleton className="h-12 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full" />
                    </>
                  )}
                </div>
                <div className="flex gap-4">
                  {imagesLoaded[index] ? (
                    <>
                      <Link href={`/info/${popular.id}`}>
                        <Button>
                          <Plus className="mr-2 h-5 w-5" />
                          Watch Now
                        </Button>
                      </Link>
                      <Button variant="outline">
                        <Plus className="mr-2 h-5 w-5" />
                        Add to List
                      </Button>
                    </>
                  ) : (
                    <>
                      <Skeleton className="h-10 w-28" />
                      <Skeleton className="h-10 w-28" />
                    </>
                  )}
                </div>
              </div>
            </section>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
