import { NextRequest, NextResponse } from 'next/server';
import { META } from '@consumet/extensions';

const anilist = new META.Anilist();

export async function GET(req: NextRequest, res: NextResponse) {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') || "1");
  const perPage = parseInt(url.searchParams.get('perPage') || "20");
  const query: string | undefined = undefined;
  const type = "MANGA";
  const sort = ["POPULARITY_DESC"];
  const format: string | undefined = undefined;
  const id: string | undefined = undefined;
  const year : string | undefined = undefined;
  const status : string | undefined = undefined;
  const season : string | undefined = undefined;
  const genres: string | undefined = undefined;

  try {
    const data = await anilist.advancedSearch(
      query,
      type,
      page,
      perPage,
      format,
      sort,
      genres,
      id,
      year,
      status,
      season,
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}