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
        <Link href="/" className="mr-5">
          Mobile
        </Link>
        <Link href="/" className="mr-5">
          Telegram
        </Link>
        <Link href="/" className="mr-5">
          Github
        </Link>
        <Link href="/admin">Admin</Link>
        {isLoggedIn && <Logout />}
      </nav>
    </header>
  );
};

export default Header;
