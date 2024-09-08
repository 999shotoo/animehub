import { NextRequest, NextResponse } from 'next/server';
import { META } from '@consumet/extensions';
import MangaReader from '@consumet/extensions/dist/providers/manga/mangareader';
import Mangasee123 from '@consumet/extensions/dist/providers/manga/mangasee123';

const anilist = new META.Anilist.Manga(new MangaReader);

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { pathname } = req.nextUrl;
    const id = pathname.split('/').pop();

    if (id === undefined) {
      return NextResponse.json(new Error('Invalid id parameter'), {status:400}); 
    }

    const data = (await anilist.fetchMangaInfo("30013")).chapters;

    if (!data) {
      return NextResponse.json('Data not found');
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({error: "Something went wrong"}, {status:500});
  }
}