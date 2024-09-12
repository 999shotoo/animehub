import { CustomCarousel } from "@/components/home/carousel";
import Trending from "@/components/home/trending";
import { FetchPopularAnime, FetchTrendingAnime } from "@/server/anime";
import { FetchTrendingManga } from "@/server/manga";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Watch Anime Free Online - AniHub",
  description: "AniHub is a free anime streaming website where you can watch your favorite anime shows online without any subscription or registration. ",
};


export default async function Home() {
  const popularanime = await FetchPopularAnime();
  const trendinganime = await FetchTrendingAnime(8);
  const trendingmanga = await FetchTrendingManga(8);

  return (
    <>
      <main className="md:px-20 md:py-4">
        <CustomCarousel data={popularanime} sectionurl={"anime"} />
        <Trending data={trendinganime} trending_name={"Trending Anime"} trending_url={"anime"} />
        <Trending data={trendingmanga} trending_name={"Trending Manga"} trending_url={"manga"} />
      </main>
    </>
  );
}
