import { CustomCarousel } from "@/components/home/carousel";
import Trending from "@/components/home/trending";
import { FetchPopularAnime, FetchTrendingAnime } from "@/server/anime";
import { FetchTrendingManga } from "@/server/manga";
export default async function Home() {
  const popularanime = await FetchPopularAnime();
  const trendinganime = await FetchTrendingAnime(8);
  const trendingmanga = await FetchTrendingManga(8);

  return (
    <>
      <main className="md:px-20 md:py-4">
        <CustomCarousel data={popularanime} />
        <Trending data={trendinganime} trending_name={"anime"} />
        <Trending data={trendingmanga} trending_name={"managa"} />
      </main>
    </>
  );
}
