

import AboutTab from "@/components/manga/info/abouttab";
import TrailerPlayer from "@/components/manga/info/trailerplayer";
import { FetchInfoManga, FetchInfoMangaExtra } from "@/server/manga";
import Image from "next/image";

export default async function Info({ params }: any) {
    const ani_id = params.id;
    const AnilistInfo = await FetchInfoManga(ani_id);
    return (
        <>
            <main className="md:px-20 md:py-4">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 md:pt-10">
                    <div className="relative">
                        <div className="aspect-video rounded-lg overflow-hidden block md:hidden">
                            <Image
                                src={AnilistInfo.cover}
                                alt="Video not available"
                                width={1920}
                                height={1080}
                                className="rounded-lg"
                                style={{ aspectRatio: "7/4", objectFit: "cover" }}
                            />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden hidden md:block">
                            <TrailerPlayer url={AnilistInfo.trailer?.id || ""} image={AnilistInfo.cover} />
                        </div>
                        <div className="absolute bottom-4 left-4 bg-background/50 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                            <img
                                src={AnilistInfo.image}
                                alt="Manga Poster"
                                width={100}
                                height={120}
                                className="rounded-md"
                                style={{ aspectRatio: "80/120", objectFit: "cover" }}
                            />
                            <div>
                                <h2 className="text-lg font-semibold">{AnilistInfo.title.english || AnilistInfo.title.romaji}</h2>
                                <p className="text-sm text-muted-foreground">{AnilistInfo.genres.join(", ")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <AboutTab AnilistInfo={AnilistInfo} Aniid={ani_id} ChapterData={AnilistInfo.chapters} />
                    </div>
                </div>
            </main>
        </>
    );
}
