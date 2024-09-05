import { NextRequest, NextResponse } from 'next/server';
import { META } from '@consumet/extensions';
import { sources } from 'next/dist/compiled/webpack/webpack';
import { Download } from 'lucide-react';

const anilist = new META.Anilist();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { pathname } = req.nextUrl;
    const epsid = pathname.split('/').pop();

    if (epsid === undefined) {
      return NextResponse.json(new Error('Invalid id parameter'), {status:400}); 
    }

    const subsrc = await anilist.fetchEpisodeSources(epsid);
    const subembed = await anilist.fetchEpisodeServers(epsid);

    const data ={
                sources: subsrc.sources,
                download: subsrc.download,
                embeds: subembed,
        }

    if (!data) {
      return NextResponse.json('Data not found');
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({error: "Something went wrong"}, {status:500});
  }
}