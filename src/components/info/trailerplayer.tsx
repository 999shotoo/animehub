"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import CoolImage from "../image";
import { Skeleton } from "@/components/ui/skeleton";

export default function TrailerPlayer({
  url,
  image,
}: {
  url: string;
  image: string;
}) {
  const [playVideo, setPlayVideo] = useState(false);
  const [videoValid, setVideoValid] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlayVideo(true);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleError = (error: any) => {
    setVideoValid(false);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="w-full aspect-[7/4] rounded-lg overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }

  return (
    <>
      {videoValid ? (
        <ReactPlayer
          url={url}
          playing={playVideo}
          loop={true}
          controls={true}
          volume={0.1}
          width="100%"
          height="100%"
          onError={handleError}
        />
      ) : (
        <CoolImage
          src={image}
          alt="Video not available"
          width={1300}
          height={1200}
          className="rounded-lg object-cover aspect-[7/4]"
        />
      )}
    </>
  );
}
