import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";

export default function AnimeInforRelate(props: any){
    const related = props.AnilistInfo.relations;
    return (
        <>
            <div className="grid gap-4">
            <ScrollArea className="h-[40vh] md:h-[40vh] lg:h-[60vh] w-full rounded-md">
            {related.map((relate: any, index: any) => (
                  <Link href={`/anime/info/${relate.id}`} key={index}>
                  <div className="flex items-center gap-4 py-2" key={index}>
                      <div className="flex-shrink-0 w-16 h-24 rounded-md overflow-hidden">
                          <Image
                              src={relate.image}
                              alt="Related Anime Poster"
                              width={64}
                              height={96}
                              className="w-full h-full object-cover"
                              style={{ aspectRatio: "64/96", objectFit: "cover" }}
                          />
                      </div>
                      <div>
                          <h3 className="font-medium">{relate.title.english || relate.title.userPreferred}</h3>
                          <p className="text-sm text-muted-foreground">{relate.relationType}</p>
                      </div>
                  </div>
                  </Link>
            ))}
            </ScrollArea>
            </div>
        </>
    )
}