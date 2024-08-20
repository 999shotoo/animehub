import Image from "next/image";
import Link from "next/link";

export default function Cardsection(props: { Fetchdata: any, SectionText: string }) {
    const data = props.Fetchdata.results;
    const SectionText = props.SectionText;
    return (
        <>
            <section className="w-full py-6 ">
                <div className="container-fluid px-2">
                <div className="mb-8">
                        <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">{SectionText}</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 lg:gap-6">
                        {data.map((data: any, index: any) => (
                            <div key={index} className="group relative rounded-lg overflow-hidden">
                                <Link href={`/manga/info/${data.id}`} className="block" prefetch={false}>
                                    <Image
                                        src={data.image}
                                        width={300}
                                        height={400}
                                        alt="Anime Thumbnail"
                                        className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-transform"
                                    />
                                    <div className="mt-2">
                                        <h3 className="text-base font-semibold group-hover:underline">{data.title.english}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2"
                                            dangerouslySetInnerHTML={{
                                                __html: data.description.slice(0, 50) + "...",
                                            }}>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}