import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function AnimeInfoChar(props: any) {
  const characters = props.AnilistInfo.characters;
  return (
    <>
      <div className="grid gap-4">
        <ScrollArea className="h-[40vh] md:h-[40vh] lg:h-[60vh] w-full rounded-md">
          {characters.map((characters: any, index: any) => (
            <div className="flex items-center gap-4 py-2" key={index}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
                {/* <Image
                  src={characters.image}
                  alt="Character Avatar"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                /> */}
                <Avatar className="w-14 h-14">
                  <AvatarImage
                    src={characters.image}
                    alt={characters.name.full}
                    className="w-full h-full object-cover aspectRatio-[64/64]"
                  />
                  <AvatarFallback>AH</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h3 className="font-medium">{characters.name.full}</h3>
                <p className="text-sm text-muted-foreground">
                  {characters.role}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
    </>
  );
}
