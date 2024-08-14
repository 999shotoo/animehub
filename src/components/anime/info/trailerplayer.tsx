"use client";
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function TrailerPlayer({ url }:any) {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayVideo(true);
    }, 2000); // 1000ms = 1 second
  }, []);

  return (
    <>
      <ReactPlayer
        url={url}
        // playing={playVideo}
        loop={true}
        controls={true}
        volume={0.1}
        width="100%"
        height="100%"
      />
    </>
  );
}