import { ScrollArea } from "@/components/ui/scroll-area";
import { EpisodeNumberFormator } from "@/hooks/episodenumber";
import { FetchEpisodesAnime } from "@/server/anime";
import Image from "next/image";
import Link from "next/link";

export default async function AnimeInfoEps(props:{id: any}) {
    const episodes = await FetchEpisodesAnime(props.id);
    return (
        <>
            <div className="grid gap-4">
            <ScrollArea className="h-[40vh] md:h-[40vh] lg:h-[60vh] w-full rounded-md">
                {episodes.map((episode: any, index: any) => (
                    <Link href={`/anime/watch/${(episode.id)}`} key={index}>
                    <div className="flex items-center gap-4 py-2">
                        <div className="flex-shrink-0 w-16 h-9 rounded-md overflow-hidden">
                            <img
                                src={episode.image}
                                alt="Episode Thumbnail"
                                width={64}
                                height={36}
                                className="w-full h-full object-cover"
                                style={{ aspectRatio: "64/36", objectFit: "cover" }}
                            />
                        </div>
                        <div>
                            <h3 className="font-medium">Episode {episode.number}</h3>
                            <p className="text-sm text-muted-foreground">{episode.title}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </ScrollArea>
            </div>
        </>
    )
}