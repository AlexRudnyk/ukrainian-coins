"use client";

import { CoinType } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { useGlobalContext } from "@/context/store";
import { deleteCoin } from "@/actions";
import { Filters } from ".";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const raleway = Raleway({ subsets: ["cyrillic"], weight: "500" });

interface CoinsListProps {
  coins: CoinType[] | undefined;
  count: number | undefined;
}

const CoinsList = ({ coins, count }: CoinsListProps) => {
  const { isLoggedIn } = useGlobalContext();

  const params = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const pageQueryParam = params.get("page");

  const pageNumber =
    pageQueryParam !== null && parseInt(pageQueryParam) > 0
      ? parseInt(pageQueryParam)
      : 1;

  const handleDeleteCoin = (id: string | undefined): void => {
    if (id) deleteCoin(id);
  };

  return (
    <>
      <Filters />
      <ul className="grid mo:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mo:gap-5 md:gap-10 p-5">
        {coins?.map((coin: CoinType) => (
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
      <div className="p-8 flex align-middle justify-center">
        {pageNumber === 1 ? (
          <div className="border border-1 border-gray-600 mr-8 rounded-md w-[130px] text-center p-4 opacity-50">
            Попередня
          </div>
        ) : (
          <button
            type="button"
            className="border border-1 border-gray-600 mr-8 rounded-md w-[130px] text-center p-4 hover:bg-gray-300 transition-all"
            onClick={() => {
              const searchParams = new URLSearchParams(params);
              searchParams.set("page", (pageNumber - 1).toString());
              replace(`${pathname}?${searchParams.toString()}`);
            }}
          >
            Попередня
          </button>
        )}
        {count && pageNumber === Math.ceil(count / 8) ? (
          <div className="border border-1 border-gray-600 rounded-md w-[130px] text-center p-4 opacity-50">
            Наступна
          </div>
        ) : (
          <button
            type="button"
            className="border border-1 border-gray-600 rounded-md w-[130px] text-center p-4 hover:bg-gray-300 transition-all"
            onClick={() => {
              const searchParams = new URLSearchParams(params);
              searchParams.set("page", (pageNumber + 1).toString());
              replace(`${pathname}?${searchParams.toString()}`);
            }}
          >
            Наступна
          </button>
        )}
      </div>
    </>
  );
};

export default CoinsList;
