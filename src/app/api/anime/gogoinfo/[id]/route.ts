import { NextRequest, NextResponse } from 'next/server';
import { ANIME, META } from '@consumet/extensions';

const anilist = new ANIME.Gogoanime();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { pathname } = req.nextUrl;
    const id = pathname.split('/').pop();

    if (id === undefined) {
      return NextResponse.json(new Error('Invalid id parameter'), {status:400}); 
    }

    const data = await anilist.fetchAnimeInfo(id);

    if (!data) {
      return NextResponse.json('Data not found');
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({error: "Something went wrong"}, {status:500});
  }
}