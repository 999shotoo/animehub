import { NextRequest, NextResponse } from 'next/server';
import { META } from '@consumet/extensions';

const anilist = new META.Anilist();

export async function GET(req: NextRequest, res: NextResponse) {
    const page = parseInt(req.nextUrl.searchParams.get('page') || "1");
    const perPage = parseInt(req.nextUrl.searchParams.get('perPage') || "10");
    try {
        const data = await anilist.fetchTrendingAnime(page, perPage);

        if (!data) {
            return NextResponse.json('Data not found');
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}