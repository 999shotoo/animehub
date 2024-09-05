export async function FetchPopularAnime(){
    const response = await fetch(`${process.env.SITE_URL}/api/anime/popular`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
}

export async function FetchTrendingAnime(per_page: number){
    const response = await fetch(`${process.env.SITE_URL}/api/anime/trending?perPage=${per_page}`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
}

export const FetchTopAnime = async (count:number) => {
    const data = await fetch(`${process.env.SITE_URL}/api/anime/top?perPage=${count}`, { next: { revalidate: 3600 } });
    const episodeData = await data.json();
    return episodeData;
}

export const FetchNewAnime = async (count: number) => {
    const data = await fetch(`${process.env.SITE_URL}/api/anime/latest?perPage=${count}`, { next: { revalidate: 3600 } })
    return await data.json();
  }

  
export const FetchGenerAnime = async (genre:string, count: number) => {
    const data = await fetch(`${process.env.SITE_URL}/api/anime/gener/${genre}?page=1&perPage=${count}`)
    return await data.json();
  }
  

export async function FetchInfoAnime(id: string){
    const response = await fetch(`${process.env.SITE_URL}/api/anime/info/${id}`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
}

export async function FetchInfoAnimeExtra(id: string){
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
}

export async function FetchEpisodesAnime(id: string){
    const response = await fetch(`${process.env.SITE_URL}/api/anime/episodes/${id}`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
}

export async function FetchEpisodesSrcAnime(episodeId: string){
    const response = await fetch(`${process.env.SITE_URL}/api/anime/watch/${episodeId}`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return { data, status: response.status };
}
