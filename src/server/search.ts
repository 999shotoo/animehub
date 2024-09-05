export const FetchSearch = async (query:string, type:string, per_page:string) => {
  const url = new URL(`/api/search/advance`, process.env.SITE_URL);
  url.searchParams.set('query', query);
  url.searchParams.set('type', type);
  url.searchParams.set('perPage', per_page);
  const response = await fetch(url.href, { next: { revalidate: 3600 } });
  const data = await response.json();
  return data;
}