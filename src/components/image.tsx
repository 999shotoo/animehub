"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CoolImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function CoolImage({
  src,
  alt,
  width,
  height,
  className = "",
}: CoolImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <svg
            className="absolute inset-0 w-full h-full text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-4.44-6.19l-2.35 3.02-1.56-1.88c-.2-.25-.58-.24-.78.01l-1.74 2.23c-.26.33-.02.81.39.81h8.98c.41 0 .65-.47.4-.8l-2.55-3.39c-.19-.26-.59-.26-.79 0z" />
          </svg>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setIsLoading(false)}
          className={`${className}`}
        />
      </motion.div>
    </div>
  );
}
