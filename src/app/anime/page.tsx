import Cardsection from "@/components/anime/home/cardsections";
import { CustomCarousel } from "@/components/home/carousel";
import { FetchNewAnime, FetchPopularAnime, FetchTopAnime, FetchTrendingAnime } from "@/server/anime";

export default async function Page(){
    const popularanime = await FetchPopularAnime();
    const trendinganime = await FetchTrendingAnime(16);
    const topanime = await FetchTopAnime(16);
    const newanime = await FetchNewAnime(24);
   return(
    <>
          {/* <main className="md:px-20 md:py-4">
        <CustomCarousel data={popularanime} sectionurl={"anime"} />
        <Cardsection Fetchdata={topanime} SectionText={`Top Anime`} />
        <Cardsection Fetchdata={trendinganime} SectionText={`Trending Anime`} />
        <Cardsection Fetchdata={newanime} SectionText={`New Episodes`} />
        </main> */}
    </>
   )
}