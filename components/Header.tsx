"use client";

import Link from "next/link";
import React from "react";
import { useGlobalContext } from "@/context/store";
import { Logout } from ".";
import { Great_Vibes } from "next/font/google";

const great_vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  const { isLoggedIn } = useGlobalContext();

  return (
    <header className="w-[1280px] mx-auto p-5 flex justify-between items-center">
      <div>
        <Link href="/">
          <h2 className={`${great_vibes.className} text-4xl`}>U-Coins</h2>
        </Link>
      </div>
      <nav className="flex">
        <Link
          href="tel:+380675052001"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 hover:scale-110 transition ease-in-out"
        >
          <div className="bg-mobile bg-cover bg-no-repeat w-[25px] h-[25px]" />
        </Link>
        <Link
          href="https://t.me/alexander_rudnyk"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 hover:scale-110 transition ease-in-out"
        >
          <div className="bg-telegram bg-cover bg-no-repeat w-[25px] h-[25px]" />
        </Link>
        <Link
          href="https://github.com/AlexRudnyk"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 hover:scale-110 transition ease-in-out"
        >
          <div className="bg-github bg-cover bg-no-repeat w-[25px] h-[25px]" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alexander-rudnyk-706326172/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 hover:scale-110 transition ease-in-out"
        >
          <div className="bg-linkedIn bg-cover bg-no-repeat w-[25px] h-[25px]" />
        </Link>
        <Link href="/admin" className="hover:scale-110 transition ease-in-out">
          <div className="bg-admin bg-cover bg-no-repeat w-[25px] h-[25px]" />
        </Link>
        {isLoggedIn && <Logout />}
      </nav>
    </header>
  );
};

export default Header;
