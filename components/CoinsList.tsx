"use client";

import { CoinType } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { useGlobalContext } from "@/context/store";
import { deleteCoin, filterByYear } from "@/actions";
import { Filters } from ".";

const raleway = Raleway({ subsets: ["cyrillic"], weight: "500" });

interface CoinsListProps {
  coins: CoinType[] | undefined;
}

const CoinsList = ({ coins }: CoinsListProps) => {
  const { isLoggedIn } = useGlobalContext();
  const [year, setYear] = useState<string>("");
  const [filteredArray, setFilteredArray] = useState<CoinType[]>([]);

  const handleDeleteCoin = (id: string | undefined): void => {
    if (id) deleteCoin(id);
  };

  const getYear = (year: string) => {
    setYear(year);
  };

  useEffect(() => {
    const getFilteredArray = async () => {
      const filterArray = await filterByYear(year);
      if (filterArray) setFilteredArray(filterArray);
    };
    getFilteredArray();
  }, [year]);

  const arrayToRender: CoinType[] | undefined =
    filteredArray.length > 0 ? filteredArray : coins;

  return (
    <>
      <Filters getYear={getYear} />
      <ul className="grid grid-cols-4 gap-10">
        {arrayToRender?.map((coin: CoinType) => (
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
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CoinsList;
