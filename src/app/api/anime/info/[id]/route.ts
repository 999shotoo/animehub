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

    const data = await anilist.fetchAnimeInfo(id);
    delete data.episodes;
    return NextResponse.json(data);
  
  } catch (error) {
    return NextResponse.json({error: "Something went wrong"}, {status:500});
  }
}