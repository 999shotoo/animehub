import { ScrollArea } from "@/components/ui/scroll-area";

export default function AnimeInfoAbout(props: any) {
    const AnilistInfo = props.AnilistInfo;
    return (
        <>
        <ScrollArea className="h-[40vh] md:h-[40vh] lg:h-[60vh] w-full rounded-md">
            <div className="prose text-muted-foreground"
                dangerouslySetInnerHTML={{
                    __html: AnilistInfo.description,
                }}
            >
            </div>
            </ScrollArea>
        </>
    )
}