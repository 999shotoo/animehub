import { NextRequest, NextResponse } from 'next/server';
import { META } from '@consumet/extensions';

enum Genres {
  Action,
  Adventure,
  Cars,
  Comedy,
  Drama,
  Fantasy,
  Horror,
  MahouShoujo,
  Mecha,
  Music,
  Mystery,
  Psychological,
  Romance,
  SciFi,
  SliceOfLife,
  Sports,
  Supernatural,
  Thriller,
}

const anilist = new META.Anilist();

export async function GET(req: NextRequest, res: NextResponse) {
  const url = new URL(req.url);
  const query = url.searchParams.get('query') ?? undefined;
  const page = parseInt(url.searchParams.get('page') || "1");
  const perPage = parseInt(url.searchParams.get('perPage') || "20");
  const type = url.searchParams.get('type') || "ANIME";
  let genres: string[] | null = null;
  const id = url.searchParams.get('id') ?? undefined;
  const format = url.searchParams.get('format') ?? undefined;
  let sort: string[] | null = null;
  const status = url.searchParams.get('status') ?? undefined;
  const year = parseInt(url.searchParams.get('year') || "");
  const season = url.searchParams.get('season') || undefined;

  if (url.searchParams.get('genres')) {
    try {
      genres = JSON.parse(url.searchParams.get('genres') as string);
      if (genres !== null) {
        genres.forEach((genre: string) => {
          if (!Object.values(Genres).includes(genre as unknown as Genres)) {
            return NextResponse.json({ message: `${genre} is not a valid genre` }, { status: 400 });
          }
        });
      }
    } catch (error) {
      return NextResponse.json({ message: "Invalid genres" }, { status: 400 });
    }
  }

  if (url.searchParams.get('sort')) {
    try {
      sort = JSON.parse(url.searchParams.get('sort') as string);
    } catch (error) {
      return NextResponse.json({ message: "Invalid sort" }, { status: 400 });
    }
  }

  if (season && !['WINTER', 'SPRING', 'SUMMER', 'FALL'].includes(season)) {
    return NextResponse.json({ message: `${season} is not a valid season` }, { status: 400 });
  }

  try {
    const data = await anilist.advancedSearch(
      query,
      type,
      page,
      perPage,
      format,
      sort as string[],
      genres as string[],
      id,
      year,
      status,
      season,
    );

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}