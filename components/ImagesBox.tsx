"use client";

import React, { useEffect, useRef } from "react";
import { CoinType } from "@/types";
import Image from "next/image";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

interface ImagesBoxProps {
  coin: CoinType;
}

const ImagesBox = ({ coin }: ImagesBoxProps) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      const lightbox = new SimpleLightbox(
        galleryRef.current.querySelectorAll("a")
      );

      return () => {
        lightbox.destroy();
      };
    }
  }, []);

  return (
    <div className="grid grid-cols-3 gap-[15px]" ref={galleryRef}>
      {coin.photoURL.map((url: string) => (
        <a
          href={url}
          className="group last:mr-0 hover:scale-105 transition ease-in-out cursor-zoom-in"
          key={Math.random()}
        >
          <Image
            src={url}
            width={90}
            height={90}
            className="w-full h-auto"
            alt="another looks of coin"
          />
        </a>
      ))}
    </div>
  );
};

export default ImagesBox;
