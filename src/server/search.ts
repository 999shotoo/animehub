export const FetchSearch = async (query:string, type:string, per_page:string) => {
    const data = await fetch(`${process.env.SITE_URL}/api/search/advance?query=${query}&type=${type}&perPage=${per_page}`, { next: { revalidate: 3600 } });
    return await data.json();
  }