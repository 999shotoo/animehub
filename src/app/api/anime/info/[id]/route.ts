import { NextRequest, NextResponse } from 'next/server';
import { META } from '@consumet/extensions';

const anilist = new META.Anilist();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { pathname } = req.nextUrl;
    const id = pathname.split('/').pop();

    if (id === undefined) {
      return NextResponse.json(new Error('Invalid id parameter'), {status:400}); 
    }

    try {
      const data = await anilist.fetchAnilistInfoById(id);
      if (!data) {
        return NextResponse.json('Data not found');
      }
      return NextResponse.json(data);
    } catch (error) {
      try {
        const alternativeData = await anilist.fetchAnimeInfo(id);
        delete alternativeData.episodes;
        return NextResponse.json(alternativeData);
      } catch (alternativeError) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
      }
    }} catch (error) {
    return NextResponse.json({error: "Something went wrong"}, {status:500});
  }
}