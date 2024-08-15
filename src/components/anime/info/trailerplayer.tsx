"use client";
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

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
  }

  return (
    <>
      {videoValid ? (
        <ReactPlayer url={url} playing={playVideo} loop={true} controls={true} volume={0.1} width="100%" height="100%" onError={handleError} />
      ) : (
        <img
          src={image}
          alt="Video not available"
          width="100%"
          height="100%"
          className="rounded-lg"
          style={{ aspectRatio: "7/4", objectFit: "cover" }}
        />
      )}
    </>
  );
}

export default TrailerPlayer;