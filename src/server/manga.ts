
export async function FetchTrendingManga(per_page: number){
    const response = await fetch(`${process.env.AnimeApi_1}/meta/anilist/advanced-search?type=MANGA&sort=["TRENDING_DESC"]&perPage=${per_page}`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
}

export const FetchPopularManga = async (count: number) => {
  const data = await fetch(`${process.env.AnimeApi_1}/meta/anilist/advanced-search?type=MANGA&sort=["POPULARITY_DESC"]&perPage=${count}`)
  return await data.json();
}

export const FetchTopManga = async (count: number) => {
  const data = await fetch(`${process.env.AnimeApi_1}/meta/anilist/advanced-search?type=MANGA&sort=["SCORE_DESC"]&perPage=${count}`)
  return await data.json();
}

export const FetchNewManga = async (count: number) => {
    const data = await fetch(`${process.env.AnimeApi_1}/meta/anilist/advanced-search?type=MANGA&sort=["POPULARITY_DESC"]&status=RELEASING&perPage=${count}`)
    return await data.json();
  }
  

export const FetchInfoManga = async (id: number) => {
  const data = await fetch(`${process.env.AnimeApi_1}/meta/anilist-manga/info/${id}?provider=mangadex`)
  return await data.json();
};

export async function FetchInfoMangaExtra(id: string){
    const response = await fetch(`${process.env.AnimeApi_3}/v4/manga/${id}/full`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
}
