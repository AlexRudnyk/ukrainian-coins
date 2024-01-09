import { getCoinById } from "@/actions";
import { ImagesBox } from "@/components";
import { CoinType } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function CoinCard({ params }: { params: { id: string } }) {
  const coin: CoinType = await getCoinById(params.id);

  return (
    <div className="w-[1280px] mx-auto mt-12">
      <Link href="/" className="underline inline-block mb-10 text-xl">
        На головну
      </Link>
      <div className="flex">
        <div className="mx-24 p-5 bg-white rounded-md">
          <Image
            src={coin.photoURL[0].toString()}
            width={300}
            height={300}
            alt="Specific coin"
            className="mb-5"
          />
          <ImagesBox
            coin={{
              _id: coin._id?.toString(),
              title: coin.title,
              price: coin.price,
              description: coin.description,
              spec: coin.spec,
              photoURL: coin.photoURL,
              year: coin.year,
            }}
          />
        </div>
        <div className="">
          <p className="text-3xl mb-5">Номінал монети: {coin.title}</p>
          <p className="text-3xl mb-5">Рік випуску: {coin.year}</p>
          <p className="text-3xl mb-5">Штамп: {coin.spec}</p>
          <p className="text-3xl mb-5">Опис: {coin.description}</p>
          {coin.price === "negotiated" ? (
            <p className="text-3xl">Орієнтовна ціна: {coin.price}</p>
          ) : (
            <p className="text-3xl">Орієнтовна ціна: {coin.price} USD</p>
          )}
        </div>
      </div>
    </div>
  );
}