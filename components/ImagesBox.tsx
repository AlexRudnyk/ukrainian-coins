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
    <div className="flex" ref={galleryRef}>
      {coin.photoURL.map((url: string) => (
        <a
          href={url}
          className="group mr-[10px] last:mr-0 hover:scale-105 transition ease-in-out"
          key={Math.random()}
        >
          <Image src={url} width={60} height={60} alt="another looks of coin" />
        </a>
      ))}
    </div>
  );
};

export default ImagesBox;
