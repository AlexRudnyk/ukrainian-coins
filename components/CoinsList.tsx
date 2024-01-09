import { CoinType } from "@/types";
import Image from "next/image";
import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["cyrillic"], weight: "500" });

interface CoinsListProps {
  coins: CoinType[] | undefined;
}

const CoinsList = ({ coins }: CoinsListProps) => {
  return (
    <ul className="grid grid-cols-4 gap-10">
      {coins?.map((coin: CoinType) => (
        <li key={coin._id} className="p-5 border border-black bg-white">
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

          {/* <ImagesBox
              coin={{
                _id: coin._id?.toString(),
                title: coin.title,
                price: coin.price,
                description: coin.description,
                spec: coin.spec,
                photoURL: coin.photoURL,
                year: coin.year,
              }}
            /> */}
        </li>
      ))}
    </ul>
  );
};

export default CoinsList;
