import { FetchEpisodesAnime, FetchEpisodesSrcAnime, FetchInfoAnime, FetchInfoAnimeExtra } from "@/server/anime";
import PlayerSelector from "@/components/anime/watch/playerselector";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import AnimeWatchEps from "@/components/anime/watch/episodes";

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
                        <Button variant="outline" className="flex items-center gap-2">
                            <Undo2 className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
                <div className="absolute top-4 right-4 z-10 flex items-center gap-4">

                        <Sheet>
                            <SheetTrigger asChild>
                            <Button variant={"outline"}>
                            <Menu className="w-6 h-6" />
                            </Button>
                            </SheetTrigger>
                            <SheetContent>
                               <AnimeWatchEps id={AnimeSrcSub.data.anilistID} />
                            </SheetContent>
                        </Sheet>


                </div>
            </div>
            <PlayerSelector sub={AnimeSrcSub.data} dub={AnimeSrcDub.data} dubEnabled={dubEnabled} />
        </>
    );
}
