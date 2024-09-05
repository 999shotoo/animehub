import { FetchEpisodesSrcAnime } from "@/server/anime";
import PlayerSelector from "@/components/anime/watch/playerselector";
import GoBackButton from "@/components/button/back";

export default async function Info({ params, searchParams }: any) {
    const episodeid = params.id;
    const episodeParts = episodeid.split('-');
    const episodeIndex = episodeParts.indexOf('episode');
    if (episodeIndex !== -1) {
        episodeParts.splice(episodeIndex, 0, 'dub');
      }
    const dubEpisode = episodeParts.join('-');
    const AnimeSrcSub = await FetchEpisodesSrcAnime(episodeid);
    const AnimeSrcDub = await FetchEpisodesSrcAnime(dubEpisode);
    let dubEnabled = true;
    if (AnimeSrcDub.status === 404) {
        dubEnabled = false;
    }
    return (
        <>
        <GoBackButton/>
            <PlayerSelector sub={AnimeSrcSub.data} dub={AnimeSrcDub.data} dubEnabled={dubEnabled} />
        </>
    );
}
