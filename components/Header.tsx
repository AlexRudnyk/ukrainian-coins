import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-[1280px] mx-auto p-5 flex justify-between items-center">
      <div>
        <Link href="/">
          <h2>Logo</h2>
        </Link>
      </div>
      <div className="flex">
        <Link href="/" className="mr-5">
          Mobile
        </Link>
        <Link href="/" className="mr-5">
          Telegram
        </Link>
        <Link href="/">GitHub</Link>
      </div>
    </header>
  );
};

export default Header;
