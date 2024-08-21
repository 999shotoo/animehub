import GoBackButton from "@/components/button/back";
import { FetchPagesManga } from "@/server/manga";
import Image from "next/image";
export default async function Page({ params }: any) {
    const chapter_id = params.chapterid;
    const ChapterData = await FetchPagesManga(chapter_id);
    return (
        <>
            <div className="relative">
            <div className="fixed top-4 left-4 z-10 flex items-center gap-4">
  <GoBackButton />
</div>
            </div>
            {ChapterData.map((page: any) => (
                <div className="flex justify-center" key={page.page}>
                    <Image
                        src={page.img}
                        alt="page"
                        className="object-cover w-[80vh]"
                        width={1080}
                        height={1920}
                    />
                </div>
            ))}
        </>
    )
}