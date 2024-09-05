import { CustomCarousel } from "@/components/home/carousel";
import Cardsection from "@/components/manga/cardselection";
import { FetchNewManga, FetchPopularManga, FetchTopManga, FetchTrendingManga } from "@/server/manga";

export default async function Page(){
    const popularanime = await FetchPopularManga(10);
    const trendinganime = await FetchTrendingManga(16);
    const topanime = await FetchTopManga(16);
    const newanime = await FetchNewManga(24);
   return(
    <>
          {/* <main className="md:px-20 md:py-4">
        <CustomCarousel data={popularanime} sectionurl={"manga"} />
        <Cardsection Fetchdata={topanime} SectionText={`Top Manga`} />
        <Cardsection Fetchdata={trendinganime} SectionText={`Trending Manga`} />
        <Cardsection Fetchdata={newanime} SectionText={`New Chapters`} />
        </main> */}
    </>
   )
}