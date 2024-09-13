import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import { BookText, Cat, House, Search, UserRoundPen } from 'lucide-react';
export default function Navbar() {
    return (
        <>
            <div className="hidden md:block">
                <div className="fixed left-4 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-4 rounded-xl bg-background  shadow-lg md:left-2 md:p-2 border-2 dark:border-2">
                    <Link href={`/`}>
                    <Button variant="ghost" size="icon" className="rounded-full ">
                        <House className="h-5 w-5" />
                        <span className="sr-only">Home</span>
                    </Button>
                    </Link>
                    <Link href={`/search`}>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>
                    </Link>
                    <Link href={`/profile`}>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <UserRoundPen  className="h-5 w-5" />
                        <span className="sr-only">Account</span>
                    </Button>
                    </Link>
                </div>
            </div>
            <div className="block md:hidden">
                <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-[50px] w-full items-center justify-around bg-background shadow-t">
                    <Link href={`/`} className="flex flex-col items-center justify-center gap-1" prefetch={false}>
                        <House className="h-6 w-6 text-muted-foreground" />
                    </Link>
                    <Link href={`/search`}  className="flex flex-col items-center justify-center gap-1" prefetch={false}>
                        <Search className="h-6 w-6 text-muted-foreground" />
                    </Link>
                    <Link href={`/profile`}  className="flex flex-col items-center justify-center gap-1" prefetch={false}>
                        <UserRoundPen className="h-6 w-6 text-muted-foreground" />
                    </Link>
                </nav>
            </div>
        </>
    )
}