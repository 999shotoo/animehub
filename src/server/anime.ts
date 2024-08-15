export async function FetchPopularAnime(){
    const response = await fetch(`${process.env.AnimeApi_1}/meta/anilist/popular`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
}

export async function FetchTrendingAnime(per_page: number){
    const response = await fetch(`${process.env.AnimeApi_1}/meta/anilist/trending?perPage=${per_page}`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
}

export async function FetchInfoAnime(id: string){
    const response = await fetch(`${process.env.AnimeApi_1}/meta/anilist/data/${id}?provider=zoro`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
}

export async function FetchInfoAnimeExtra(id: string){
    const response = await fetch(`${process.env.AnimeApi_3}/v4/anime/${id}/full`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
}

export async function FetchEpisodesAnime(id: string){
    const response = await fetch(`${process.env.AnimeApi_1}/meta/anilist/episodes/${id}?provider=zoro`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
}

export async function FetchEpisodesSrcAnime(id: string, ep: string, category: string){
    const response = await fetch(`${process.env.AnimeApi_2}/anime/episode-srcs?id=${id}?ep=${ep}&&category=${category}`, { next: { revalidate: 3600 } });
    const data = await response.json();
    return { data, status: response.status };
}
