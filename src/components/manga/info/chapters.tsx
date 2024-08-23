import { ScrollArea } from "@/components/ui/scroll-area";
import { EpisodeNumberFormator } from "@/hooks/episodenumber";
import { FetchEpisodesAnime } from "@/server/anime";
import Image from "next/image";
import Link from "next/link";

export default async function MangaInfoChapters(props:{chapters: any, mangaposter: string}) {
    const chapters = props.chapters;
    const poster = props.mangaposter;
    return (
        <>
            <div className="grid gap-4">
            <ScrollArea className="h-[40vh] md:h-[40vh] lg:h-[60vh] w-full rounded-md">
                {chapters?.filter((chapter: { pages: number; }) => chapter.pages && chapter.pages > 0).map((chapter: any, index: any) => (
                    <Link href={`/manga/read/${chapter.id}`} key={index}>
                    <div className="flex items-center gap-4 py-2">
                        <div className="flex-shrink-0 w-16 h-9 rounded-md overflow-hidden">
                            <img
                                src={poster}
                                alt="Episode Thumbnail"
                                width={64}
                                height={36}
                                className="w-full h-full object-cover"
                                style={{ aspectRatio: "64/36", objectFit: "cover" }}
                            />
                        </div>
                        <div>
                            <h3 className="font-medium">Chapter {chapter.chapterNumber}</h3>
                            <p className="text-sm text-muted-foreground">{chapter.title}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </ScrollArea>
            </div>
        </>
    )
}