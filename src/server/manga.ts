
export async function FetchTrendingManga(per_page: number){
    const response = await fetch(`${process.env.AnimeApi_1}/meta/anilist/advanced-search?type=MANGA&sort=["TRENDING_DESC"]&perPage=${per_page}`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
}