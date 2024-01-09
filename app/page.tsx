import { getAllCoins } from "@/actions";
import { ImagesBox } from "@/components";
import { CoinType } from "@/types";
import Image from "next/image";

export default async function Home() {
  const coins: CoinType[] | undefined = await getAllCoins();

  return (
    <main className="w-[1280px] mx-auto">
      <div className="w-[1280px] h-[500px] bg-hero bg-contain bg-no-repeat rounded-3xl mt-20" />
      <ul>
        {coins?.map((coin: CoinType) => (
          <li key={coin._id}>
            <p>{coin.title}</p>
            <p>Штамп: {coin.spec}</p>
            <div>
              <Image
                src={coin.photoURL[0].toString()}
                width={200}
                height={200}
                alt="coin"
                className="mb-3"
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
          </li>
        ))}
      </ul>
    </main>
  );
}
