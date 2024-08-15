

import TrailerPlayer from "@/components/anime/info/trailerplayer";
import { FetchEpisodesSrcAnime, FetchInfoAnime, FetchInfoAnimeExtra } from "@/server/anime";
import AnimeInfoEps from "@/components/anime/info/episodes";
import { Suspense } from "react";
import AboutTab from "@/components/anime/abouttab";
import PlayerSelector from "@/components/anime/watch/playerselector";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import Link from "next/link";

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
                    <Link href={`/anime/info/${AnimeSrcSub.data.anilistID}`}>
                    <Button variant="outline"  className="flex items-center gap-2">
                    <Undo2 className="w-4 h-4" />
                    </Button>
                    </Link>
                </div>
            </div>
            <PlayerSelector sub={AnimeSrcSub.data} dub={AnimeSrcDub.data} dubEnabled={dubEnabled} />

        </>
    );
}
