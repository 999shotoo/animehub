import { NextRequest, NextResponse } from 'next/server';
import { META } from '@consumet/extensions';

const anilist = new META.Anilist();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const data = await anilist.fetchPopularAnime();

    if (!data) {
      return NextResponse.json('Data not found');
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({error: "Something went wrong"}, {status:500});
  }
}