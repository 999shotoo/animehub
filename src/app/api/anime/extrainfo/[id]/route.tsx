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

    const responese = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
    const data = await responese.json();
    if (!data) {
      return NextResponse.json('Data not found');
    }

    return NextResponse.json(data.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({error: "Something went wrong"}, {status:500});
  }
}