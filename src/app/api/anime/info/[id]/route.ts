import { NextRequest, NextResponse } from 'next/server';

import { META } from '@consumet/extensions';
const anilist = new META.Anilist();

export async function GET(req: NextRequest, res: NextResponse) { 
    const { pathname } = req.nextUrl;
    const id = pathname.split('/').pop(); // Get the id parameter from the pathname

    console.log(id);

    if (id === undefined) {
      throw new Error('Invalid id parameter');
    }
    
    const data1 = await anilist.fetchAnilistInfoById(id); // Use the id parameter to fetch data
    return NextResponse.json(data1);
}