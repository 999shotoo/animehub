"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import CoolImage from "../image";

const TrailerPlayer = ({ url, image }: any) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [videoValid, setVideoValid] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPlayVideo(true);
    }, 2000);
  }, []);

  const handleError = (error: any) => {
    setVideoValid(false);
  };

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
          // style={{ aspectRatio: "7/4", objectFit: "cover" }}
        />
      )}
    </>
  );
};

export default TrailerPlayer;
