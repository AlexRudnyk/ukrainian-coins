"use client";

import { CoinType } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { useGlobalContext } from "@/context/store";
import { deleteCoin } from "@/actions";
import { Filters } from ".";

const raleway = Raleway({ subsets: ["cyrillic"], weight: "500" });

interface CoinsListProps {
  coins: CoinType[] | undefined;
}

const CoinsList = ({ coins }: CoinsListProps) => {
  const { isLoggedIn } = useGlobalContext();
  const [year, setYear] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const handleDeleteCoin = (id: string | undefined): void => {
    if (id) deleteCoin(id);
  };

  const getYear = (year: string) => {
    setYear(year);
  };

  const getTitle = (title: string) => {
    setTitle(title);
  };

  const filteredArray = coins?.filter(
    (coin: CoinType) => coin.year === year || coin.title === title
  );
  const arrayToRender =
    filteredArray?.length && filteredArray?.length > 0 ? filteredArray : coins;

  return (
    <>
      <Filters getYear={getYear} getTitle={getTitle} />
      <ul className="grid mo:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mo:gap-5 md:gap-10 p-5">
        {arrayToRender?.map((coin: CoinType) => (
          <li key={coin._id} className="mo:p-2 md:p-5 bg-white rounded-md">
            <Link href={`/coin/${coin._id}`}>
              <Image
                src={coin.photoURL[0].toString()}
                width={290}
                height={290}
                alt="coin"
                className="mb-3 w-full h-auto"
              />
              <p className={`${raleway.className} text-lg`}>
                {coin.title}, {coin.year}
              </p>
              <p className={`${raleway.className} text-lg`}>
                Штамп: {coin.spec}
              </p>
            </Link>
            {isLoggedIn && (
              <button
                type="button"
                className="py-2"
                onClick={() => handleDeleteCoin(coin._id)}
              >
                Видалити
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CoinsList;
