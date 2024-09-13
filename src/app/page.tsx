import Cardsection from "@/components/home/cardsections";
import { CustomCarousel } from "@/components/home/carousel";
import LoadingPage from "@/components/loading";
import { FetchNewAnime, FetchPopularAnime, FetchTopAnime, FetchTrendingAnime } from "@/server/anime";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Watch Anime Free Online - AniHub",
  description: "AniHub is a free anime streaming website where you can watch your favorite anime shows online without any subscription or registration. ",
};


export default async function Home() {
  const popularanime = await FetchPopularAnime();
  const trendinganime = await FetchTrendingAnime(16);
  const topanime = await FetchTopAnime(16);
  const newanime = await FetchNewAnime(24);

  return (
    <>
    <>
      <main className="md:px-20 md:py-4">
        <Suspense fallback={<LoadingPage/>}>
        <CustomCarousel data={popularanime}/>
        <Cardsection Fetchdata={topanime} SectionText={`Top Anime`} />
        <Cardsection Fetchdata={trendinganime} SectionText={`Trending Anime`} />
        <Cardsection Fetchdata={newanime} SectionText={`New Episodes`} />
        </Suspense>
      </main>
    </>
    </>
  );
}
