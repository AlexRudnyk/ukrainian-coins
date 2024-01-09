import { CoinType } from "@/types";
import Image from "next/image";
import React from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({ subsets: ["cyrillic"], weight: "500" });

interface CoinsListProps {
  coins: CoinType[] | undefined;
}

const CoinsList = ({ coins }: CoinsListProps) => {
  return (
    <ul className="grid grid-cols-4 gap-10">
      {coins?.map((coin: CoinType) => (
        <li key={coin._id} className="p-5 bg-white rounded-md">
          <Link href={`/coin/${coin._id}`}>
            <Image
              src={coin.photoURL[0].toString()}
              width={290}
              height={290}
              alt="coin"
              className="mb-3"
            />
            <p className={`${raleway.className} text-lg`}>
              {coin.title}, {coin.year}
            </p>
            <p className={`${raleway.className} text-lg`}>Штамп: {coin.spec}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CoinsList;
