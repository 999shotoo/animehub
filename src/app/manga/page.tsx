import GoBackButton from "@/components/button/back";
import { CustomCarousel } from "@/components/home/carousel";
import Cardsection from "@/components/manga/cardselection";
import { FetchNewManga, FetchPopularManga, FetchTopManga, FetchTrendingManga } from "@/server/manga";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manga || AniHub - Watch Anime Free Online",
  description: "AniHub is a free anime streaming website where you can watch your favorite anime shows online without any subscription or registration. ",
};


export default async function Page() {
  const popularanime = await FetchPopularManga(10);
  const trendinganime = await FetchTrendingManga(16);
  const topanime = await FetchTopManga(16);
  const newanime = await FetchNewManga(24);
  return (
    <>
      <GoBackButton />
      <main className="md:px-20 md:py-4">
        <CustomCarousel data={popularanime} sectionurl={"manga"} />
        <Cardsection Fetchdata={topanime} SectionText={`Top Manga`} />
        <Cardsection Fetchdata={trendinganime} SectionText={`Trending Manga`} />
        <Cardsection Fetchdata={newanime} SectionText={`New Chapters`} />
      </main>
    </>
  )
}