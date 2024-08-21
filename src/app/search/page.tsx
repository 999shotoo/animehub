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

async function searchAction(formData: FormData) {
    'use server'

    const query = formData.get('query') as string
    const type = formData.get('type') as string

    redirect(`/search?query=${query}&type=${type}`)
}

export const runtime = 'edge';


export default async function SearchPage({
    searchParams
}: {
    searchParams: { query?: string; type?: string }
}) {

    const query = searchParams.query || 'Naruto';
    const type = searchParams.type?.toUpperCase() || 'ANIME';

    const searchResults = await FetchSearch(query, type, '16');
    return (
        <div className="container mx-auto py-4 md:py-12 px-2">
            <form action={searchAction} className="space-y-4">
                <div className="flex space-x-2">
                    <Input
                        type="text"
                        name="query"
                        placeholder="Search for anime or manga..."
                        className="flex-grow"
                        defaultValue={searchParams.query}
                    />
                    <Select name="type" defaultValue={searchParams.type || "anime"}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="anime">Anime</SelectItem>
                            <SelectItem value="manga">Manga</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button type="submit">Search</Button>
                </div>
            </form>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">
                    Search Results for "{query}" ({type})
                </h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 lg:gap-6">
                    {searchResults.results.map((item: any, index: any) => (
                        <div key={index} className="group relative rounded-lg overflow-hidden">
                            <Link href={`/${searchParams.type || "anime"}/info/${item.id}`} className="block" prefetch={false}>
                                <Image
                                    src={item.image}
                                    width={300}
                                    height={400}
                                    alt="Anime Thumbnail"
                                    className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-transform"
                                />
                                <div className="mt-2">
                                    <h3 className="text-base font-semibold group-hover:underline">{item.title.english}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2"
                                        dangerouslySetInnerHTML={{
                                            __html: item.description.slice(0, 50) + "...",
                                        }}>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export async function generateMetadata() {
    return {
        title: 'Anime/Manga Search',
        description: 'Search for your favorite anime and manga titles',
    }
}