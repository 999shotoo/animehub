import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Suspense } from "react"
import MangaInfoChapters from "./chapters";
import MangaInfoChar from "./characters";
import MangaInfoAbout from "./about";
import MangaInfoRelate from "./relateds";

export default function AboutTab(props:{AnilistInfo: any, Aniid: any, ChapterData: any}) {
    const ChapterData = props.ChapterData;
    const AnilistInfo = props.AnilistInfo;
    const ani_id = props.Aniid;
    return(
        <>
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
                                        <CardTitle>Chapter</CardTitle>
                                        <CardDescription>Explore the episodes of the {AnilistInfo.title.english} manga series.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Suspense fallback={<span className="text-center content-center justify-items-center">Loading.....</span>}>
                                            <MangaInfoChapters chapters={ChapterData} mangaposter={AnilistInfo.image} />
                                        </Suspense>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="characters">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Characters</CardTitle>
                                        <CardDescription>Meet the main characters of the {AnilistInfo.title.english} manga.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                      <MangaInfoChar AnilistInfo={AnilistInfo} />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="about">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>About</CardTitle>
                                        <CardDescription>Learn more about the {AnilistInfo.title.english} manga series.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <MangaInfoAbout AnilistInfo={AnilistInfo} />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="related">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Related Content</CardTitle>
                                        <CardDescription>Discover more manga series similar to {AnilistInfo.title.english}.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                      <MangaInfoRelate AnilistInfo={AnilistInfo} />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
        </>
    )
}