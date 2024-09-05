export async function FetchPopularAnime(){
    const url = new URL(`/api/anime/popular`, process.env.VERCEL_URL || 'http://localhost:3000');
    const response = await fetch(url.href, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
  }
  
  export async function FetchTrendingAnime(per_page: number){
    const url = new URL(`/api/anime/trending`, process.env.VERCEL_URL || 'http://localhost:3000');
    url.searchParams.set('perPage', per_page.toString());
    const response = await fetch(url.href, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
  }
  
  export const FetchTopAnime = async (count:number) => {
    const url = new URL(`/api/anime/top`, process.env.VERCEL_URL || 'http://localhost:3000');
    url.searchParams.set('perPage', count.toString());
    const data = await fetch(url.href, { next: { revalidate: 3600 } });
    const episodeData = await data.json();
    return episodeData;
  }
  
  export const FetchNewAnime = async (count: number) => {
    const url = new URL(`/api/anime/latest`, process.env.VERCEL_URL || 'http://localhost:3000');
    url.searchParams.set('perPage', count.toString());
    const data = await fetch(url.href, { next: { revalidate: 3600 } })
    return await data.json();
  }
  
  export const FetchGenerAnime = async (genre:string, count: number) => {
    const url = new URL(`/api/anime/gener/${genre}`, process.env.VERCEL_URL || 'http://localhost:3000');
    url.searchParams.set('page', '1');
    url.searchParams.set('perPage', count.toString());
    const data = await fetch(url.href)
    return await data.json();
  }
  
  export async function FetchInfoAnime(id: string){
    const url = new URL(`/api/anime/info/${id}`, process.env.VERCEL_URL || 'http://localhost:3000');
    const response = await fetch(url.href, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
  }
  
  export async function FetchInfoAnimeExtra(id: string){
    const url = new URL(`https://api.jikan.moe/v4/anime/${id}/full`);
    const response = await fetch(url.href, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
  }
  
  export async function FetchEpisodesAnime(id: string){
    const url = new URL(`/api/anime/episodes/${id}`, process.env.VERCEL_URL || 'http://localhost:3000');
    const response = await fetch(url.href, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
  }
  
  export async function FetchEpisodesSrcAnime(episodeId: string){
    const url = new URL(`/api/anime/watch/${episodeId}`, process.env.VERCEL_URL || 'http://localhost:3000');
    const response = await fetch(url.href, { next: { revalidate: 3600 } });
    const data = await response.json();
    return { data, status: response.status };
  }