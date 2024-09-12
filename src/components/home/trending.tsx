import Link from "next/link";
import Image from "next/image";
export default function Trending(props: { data: any, trending_name: string, trending_url: string }) {
    const TrendingName = props.trending_name;
    const trending = props.data.results;
    const trending_url = props.trending_url;
    return (
        <>
            <section className="w-full py-6 ">
                <div className="container-fluid px-2">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">{TrendingName}</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 lg:gap-6">
                        {trending.map((trending: any, index: any) => (
                            <div key={index} className="group relative rounded-lg overflow-hidden">
                                <Link href={`/${trending_url}/info/${trending.id}`} className="block" prefetch={false}>
                                    <Image
                                        src={trending.image}
                                        width={300}
                                        height={400}
                                        alt="Anime Thumbnail"
                                        className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-transform"
                                    />
                                    <div className="mt-2">
                                        <h3 className="text-base font-semibold group-hover:underline">{trending.title.english}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate overflow-hidden max-w-full">
                                            {trending.description}
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