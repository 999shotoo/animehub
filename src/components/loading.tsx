import Image from "next/image";

export default function LoadingPage() {
    return (
        <div className="flex min-h-[100dvh] items-center justify-center bg-background">
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            src="https://media1.tenor.com/m/Gv1cMkqev0wAAAAC/anime-confused.gif"
            width={400}
            height={300}
            alt="Loading"
            className="rounded-lg"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
          <p className="text-foreground">Loading...</p>
        </div>
      </div>
    )
  }