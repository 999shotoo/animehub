import { FetchEpisodesSrcAnime } from "@/server/anime";
import PlayerSelector from "@/components/anime/watch/playerselector";
import GoBackButton from "@/components/button/back";

export const runtime = 'edge';

export default async function Info({ params, searchParams }: any) {
    const id = params.id;
    const ep = searchParams.ep;
    const AnimeSrcSub = await FetchEpisodesSrcAnime(id, ep, "sub");
    const AnimeSrcDub = await FetchEpisodesSrcAnime(id, ep, "dub");
    let dubEnabled = true;
    if (AnimeSrcDub.status === 500) {
        dubEnabled = false;
    }
    return (
        <>
            <div className="relative">
                <div className="absolute top-4 left-4 z-10 flex items-center gap-4">
                    <GoBackButton />
                </div>
            </div>
            <PlayerSelector sub={AnimeSrcSub.data} dub={AnimeSrcDub.data} dubEnabled={dubEnabled} />
        </>
    );
}
