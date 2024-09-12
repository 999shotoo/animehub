import Cardsection from "@/components/anime/home/cardsections";
import GoBackButton from "@/components/button/back";
import { CustomCarousel } from "@/components/home/carousel";
import { FetchNewAnime, FetchPopularAnime, FetchTopAnime, FetchTrendingAnime } from "@/server/anime";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anime || AniHub - Watch Anime Free Online",
  description: "AniHub is a free anime streaming website where you can watch your favorite anime shows online without any subscription or registration. ",
};


export default async function Page() {
  const popularanime = await FetchPopularAnime();
  const trendinganime = await FetchTrendingAnime(16);
  const topanime = await FetchTopAnime(16);
  const newanime = await FetchNewAnime(24);
  return (
    <>
      <GoBackButton />
      <main className="md:px-20 md:py-4">
        <CustomCarousel data={popularanime} sectionurl={"anime"} />
        <Cardsection Fetchdata={topanime} SectionText={`Top Anime`} />
        <Cardsection Fetchdata={trendinganime} SectionText={`Trending Anime`} />
        <Cardsection Fetchdata={newanime} SectionText={`New Episodes`} />
      </main>
    </>
  )
}