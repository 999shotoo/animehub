
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import TrailerPlayer from "@/components/anime/info/trailerplayer";
import { FetchInfoAnime, FetchInfoAnimeExtra } from "@/server/anime";
import AnimeInfoEps from "@/components/anime/info/episodes";
import { Suspense } from "react";

export default async function Info({ searchParams }: { searchParams: { id: string } }) {
    const ani_id = searchParams.id;
    const AnilistInfo = await FetchInfoAnime(ani_id);
    const mal_id = AnilistInfo.malId;
    const MalInfo = await FetchInfoAnimeExtra(mal_id);
    return (
        <>
            <main className="md:px-20 md:py-4">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 md:pt-10">
                    <div className="relative">
                        <div className="aspect-video rounded-lg overflow-hidden">
                        <Suspense fallback={<span className="text-center content-center justify-items-center">Loading.....</span>}>
                            <TrailerPlayer url={`${MalInfo.data.trailer.url}`} />
                            </Suspense>
                        </div>
                        <div className="absolute bottom-4 left-4 bg-background/50 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                            <img
                                src={AnilistInfo.image}
                                alt="Anime Poster"
                                width={100}
                                height={120}
                                className="rounded-md"
                                style={{ aspectRatio: "80/120", objectFit: "cover" }}
                            />
                            <div>
                                <h2 className="text-lg font-semibold">{AnilistInfo.title.english}</h2>
                                <p className="text-sm text-muted-foreground">{AnilistInfo.genres.join(", ")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <Tabs defaultValue="episodes">
                            <TabsList className="grid grid-cols-4 gap-2">
                                <TabsTrigger value="episodes">Episodes</TabsTrigger>
                                <TabsTrigger value="characters">Characters</TabsTrigger>
                                <TabsTrigger value="about">About</TabsTrigger>
                                <TabsTrigger value="related">Related</TabsTrigger>
                            </TabsList>
                            <TabsContent value="episodes">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Episodes</CardTitle>
                                        <CardDescription>Explore the episodes of the {AnilistInfo.title.english} anime series.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Suspense fallback={<span className="text-center content-center justify-items-center">Loading.....</span>}>
                                        <AnimeInfoEps id={ani_id} />
                                        </Suspense>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="characters">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Characters</CardTitle>
                                        <CardDescription>Meet the main characters of the Demon Slayer anime.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
                                                    <img
                                                        src="/placeholder.svg"
                                                        alt="Character Avatar"
                                                        width={64}
                                                        height={64}
                                                        className="w-full h-full object-cover"
                                                        style={{ aspectRatio: "64/64", objectFit: "cover" }}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">Tanjiro Kamado</h3>
                                                    <p className="text-sm text-muted-foreground">Main Protagonist</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
                                                    <img
                                                        src="/placeholder.svg"
                                                        alt="Character Avatar"
                                                        width={64}
                                                        height={64}
                                                        className="w-full h-full object-cover"
                                                        style={{ aspectRatio: "64/64", objectFit: "cover" }}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">Nezuko Kamado</h3>
                                                    <p className="text-sm text-muted-foreground">Tanjiro's Sister</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
                                                    <img
                                                        src="/placeholder.svg"
                                                        alt="Character Avatar"
                                                        width={64}
                                                        height={64}
                                                        className="w-full h-full object-cover"
                                                        style={{ aspectRatio: "64/64", objectFit: "cover" }}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">Zenitsu Agatsuma</h3>
                                                    <p className="text-sm text-muted-foreground">Demon Slayer Trainee</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
                                                    <img
                                                        src="/placeholder.svg"
                                                        alt="Character Avatar"
                                                        width={64}
                                                        height={64}
                                                        className="w-full h-full object-cover"
                                                        style={{ aspectRatio: "64/64", objectFit: "cover" }}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">Inosuke Hashibira</h3>
                                                    <p className="text-sm text-muted-foreground">Demon Slayer Trainee</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="about">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>About</CardTitle>
                                        <CardDescription>Learn more about the Demon Slayer anime series.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="prose text-muted-foreground">
                                            <p>
                                                Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu
                                                Gotouge. The story follows Tanjiro Kamado, a young man who becomes a demon slayer after his family
                                                is murdered and his younger sister Nezuko is transformed into a demon.
                                            </p>
                                            <p>
                                                The series was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016
                                                to May 2020, with its chapters collected in 23 tankōbon volumes. An anime television series
                                                adaptation by Ufotable aired from April 2019 to September 2019, and a feature film titled Demon
                                                Slayer: Kimetsu no Yaiba the Movie: Mugen Train was released in October 2020.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="related">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Related Content</CardTitle>
                                        <CardDescription>Discover more anime series similar to Demon Slayer.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="flex-shrink-0 w-16 h-24 rounded-md overflow-hidden">
                                                    <img
                                                        src="/placeholder.svg"
                                                        alt="Related Anime Poster"
                                                        width={64}
                                                        height={96}
                                                        className="w-full h-full object-cover"
                                                        style={{ aspectRatio: "64/96", objectFit: "cover" }}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">Attack on Titan</h3>
                                                    <p className="text-sm text-muted-foreground">Action, Fantasy</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex-shrink-0 w-16 h-24 rounded-md overflow-hidden">
                                                    <img
                                                        src="/placeholder.svg"
                                                        alt="Related Anime Poster"
                                                        width={64}
                                                        height={96}
                                                        className="w-full h-full object-cover"
                                                        style={{ aspectRatio: "64/96", objectFit: "cover" }}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">Jujutsu Kaisen</h3>
                                                    <p className="text-sm text-muted-foreground">Action, Supernatural</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex-shrink-0 w-16 h-24 rounded-md overflow-hidden">
                                                    <img
                                                        src="/placeholder.svg"
                                                        alt="Related Anime Poster"
                                                        width={64}
                                                        height={96}
                                                        className="w-full h-full object-cover"
                                                        style={{ aspectRatio: "64/96", objectFit: "cover" }}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">My Hero Academia</h3>
                                                    <p className="text-sm text-muted-foreground">Action, Superhero</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex-shrink-0 w-16 h-24 rounded-md overflow-hidden">
                                                    <img
                                                        src="/placeholder.svg"
                                                        alt="Related Anime Poster"
                                                        width={64}
                                                        height={96}
                                                        className="w-full h-full object-cover"
                                                        style={{ aspectRatio: "64/96", objectFit: "cover" }}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">Fullmetal Alchemist: Brotherhood</h3>
                                                    <p className="text-sm text-muted-foreground">Action, Adventure</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </main>
        </>
    );
}
