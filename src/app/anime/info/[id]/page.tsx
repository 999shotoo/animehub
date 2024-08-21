

import TrailerPlayer from "@/components/anime/info/trailerplayer";
import { FetchEpisodesAnime, FetchInfoAnime, FetchInfoAnimeExtra } from "@/server/anime";
import AnimeInfoEps from "@/components/anime/info/episodes";
import { Suspense } from "react";
import AboutTab from "@/components/anime/abouttab";

export const runtime = 'edge';

export default async function Info({ params }: any) {
    const ani_id = params.id;
    const AnilistInfo = await FetchInfoAnime(ani_id);
    const mal_id = AnilistInfo.malId;
    const MalInfo = await FetchInfoAnimeExtra(mal_id);
    const EpisodesData = await FetchEpisodesAnime(ani_id);
    return (
        <>
            <main className="md:px-20 md:py-4">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 md:pt-10">
                    <div className="relative">
                        <div className="aspect-video rounded-lg overflow-hidden hidden md:block">
                            <Suspense fallback={<span className="text-center content-center justify-items-center">Loading.....</span>}>
                                <TrailerPlayer url={`${MalInfo.data?.trailer.url}`} image={`${AnilistInfo.cover}`} />
                            </Suspense>
                        </div>
                        <div className="absolute bottom-4 left-4 bg-background/50 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                            <img
                                src={AnilistInfo.image}
                                alt="Anime Poster"
                                width={100}
                                height={120}
                                className="rounded-md"
                                style={{ aspectRatio: "80/120", objectFit: "cover" }}
                            />
                            <div>
                                <h2 className="text-lg font-semibold">{AnilistInfo.title.english || AnilistInfo.title.userPreferred}</h2>
                                <p className="text-sm text-muted-foreground">{AnilistInfo.genres.join(", ")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-6">
                       <AboutTab AnilistInfo={AnilistInfo} Aniid={ani_id} EpisodeData={EpisodesData} />
                    </div>
                </div>
            </main>
        </>
    );
}
