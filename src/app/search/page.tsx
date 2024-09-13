import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FetchSearch } from "@/server/search"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import GoBackButton from "@/components/button/back"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Search || AniHub",
    description: "AniHub is a free anime streaming website where you can watch your favorite anime shows online without any subscription or registration. ",
  };
  
async function searchAction(formData: FormData) {
    'use server'

    const query = formData.get('query') as string

    redirect(`/search?query=${query}`)
}

export default async function SearchPage({
    searchParams
}: {
    searchParams: { query?: string; type?: string }
}) {

    const query = searchParams.query || 'Naruto';
    const type = "ANIME";

    const searchResults = await FetchSearch(query, type, '16');
    return (
        <>
            <GoBackButton />
            <div className="py-4 md:py-12 md:px-20 px-4">
                <form action={searchAction} className="space-y-4">
                    <div className="flex space-x-2">
                        <Input
                            type="text"
                            name="query"
                            placeholder="Search for anime or manga..."
                            className="flex-grow"
                            defaultValue={searchParams.query}
                        />
                        <Button type="submit">Search</Button>
                    </div>
                </form>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">
                        Search Results for "{query}"
                    </h2>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 lg:gap-6">
                        {searchResults.results.map((item: any, index: any) => (
                            <div key={index} className="group relative rounded-lg overflow-hidden">
                                <Link href={`/info/${item.id}`} className="block" prefetch={false}>
                                    <Image
                                        src={item.image}
                                        width={300}
                                        height={400}
                                         blurDataURL="/blur.jpg"
                                        alt="Anime Thumbnail"
                                        className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-transform"
                                    />
                                    <div className="mt-2">
                                        <h3 className="text-base font-semibold group-hover:underline">{item.title.english}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate overflow-hidden max-w-full">
                                            {item.description}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

