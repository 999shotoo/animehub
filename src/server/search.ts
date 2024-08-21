export const FetchSearch = async (query:string, type:string, per_page:string) => {
    const data = await fetch(`${process.env.AnimeApi_1}/meta/anilist/advanced-search?query=${query}&type=${type}&perPage=${per_page}`, { next: { revalidate: 3600 } });
    return await data.json();
  }