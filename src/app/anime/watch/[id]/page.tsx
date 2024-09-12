import { FetchEpisodesSrcAnime } from "@/server/anime";
import PlayerSelector from "@/components/anime/watch/playerselector";
import GoBackButton from "@/components/button/back";
import type { Metadata, ResolvingMetadata } from 'next'


export async function generateMetadata(
    { params, searchParams }: any): Promise<Metadata> {
    const episodeid = params.id;
    const id = episodeid.replace(/-episode-\d+$/, '');
    return {
      title: id,
    }
  }


export default async function Info({ params, searchParams }: any) {
    const episodeid = params.id;
    const episodeParts = episodeid.split('-');
    const episodeIndex = episodeParts.indexOf('episode');
    if (episodeIndex !== -1) {
        episodeParts.splice(episodeIndex, 0, 'dub');
      }
    const dubEpisode = episodeParts.join('-');
    console.log(dubEpisode);
    const AnimeSrcSub = await FetchEpisodesSrcAnime(episodeid);
    const AnimeSrcDub = await FetchEpisodesSrcAnime(dubEpisode);
    let dubEnabled = true;
    if (AnimeSrcDub.status === 500) {
        dubEnabled = false;
    }
    return (
        <>
        <GoBackButton/>
            <PlayerSelector sub={AnimeSrcSub.data} dub={AnimeSrcDub.data} dubEnabled={dubEnabled} />
        </>
    );
}
