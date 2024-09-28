import TrailerPlayer from "@/components/info/trailerplayer";
import {
  FetchEpisodesAnime,
  FetchInfoAnime,
  FetchInfoAnimeExtra,
} from "@/server/anime";
import AnimeInfoEps from "@/components/info/episodes";
import { Suspense } from "react";
import AboutTab from "@/components/info/abouttab";
import GoBackButton from "@/components/button/back";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import CoolImage from "@/components/image";

export async function generateMetadata({
  params,
  searchParams,
}: any): Promise<Metadata> {
  const id = params.id;
  const Metainfo = await FetchInfoAnime(id);
  return {
    title:
      Metainfo.title && typeof Metainfo.title === "object"
        ? (Metainfo.title.native || Metainfo.title.english) +
          " || Kairo - Watch Anime Free Online"
        : "Default title",
    description: Metainfo.description,
    openGraph: {
      images: [Metainfo.cover || "default-image-url"],
    },
  };
}
export default async function Info({ params }: any) {
  const ani_id = params.id;
  const AnilistInfo = await FetchInfoAnime(ani_id);
  const mal_id = AnilistInfo.malId;
  const MalInfo = await FetchInfoAnimeExtra(`${mal_id}`);
  const EpisodesData = await FetchEpisodesAnime(ani_id);

  return (
    <>
      <GoBackButton />
      <main className="md:px-20 md:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 md:pt-10">
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden block md:hidden">
              <CoolImage
                src={`${AnilistInfo.cover}`}
                alt="Video not available"
                width={450}
                height={1280}
                className="rounded-lg object-cover aspect-[7/4]"
                // style={{ aspectRatio: "7/4", objectFit: "cover" }}
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden hidden md:block">
              <Suspense
                fallback={
                  <span className="text-center content-center justify-items-center">
                    Loading.....
                  </span>
                }
              >
                <TrailerPlayer
                  url={`${MalInfo.data?.trailer.url}`}
                  image={`${AnilistInfo.cover}`}
                />
              </Suspense>
            </div>
            <div className="absolute bottom-4 left-4 bg-background/50 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
              <Image
                src={`${AnilistInfo.image}`}
                alt="Anime Poster"
                width={100}
                height={120}
                className="rounded-md"
                style={{ aspectRatio: "80/120", objectFit: "cover" }}
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {AnilistInfo.title && typeof AnilistInfo.title !== "string"
                    ? AnilistInfo.title.english ||
                      AnilistInfo.title.userPreferred
                    : AnilistInfo.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {AnilistInfo.genres ? AnilistInfo.genres.join(", ") : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <AboutTab
              AnilistInfo={AnilistInfo}
              Aniid={ani_id}
              EpisodeData={EpisodesData}
            />
          </div>
        </div>
      </main>
    </>
  );
}
