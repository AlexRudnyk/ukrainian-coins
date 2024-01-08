import { getAllCoins } from "@/actions";
import { AdminForm } from "@/components";
import { CoinType } from "@/types";
import {
  URL,
  URLPattern,
} from "next/dist/compiled/@edge-runtime/primitives/url";
import Image from "next/image";

export default async function Home() {
  const coins = await getAllCoins();

  return (
    <main className="">
      <AdminForm />
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
              <div className="flex">
                {coin.photoURL.map((url: string) => (
                  <Image
                    key={Math.random()}
                    src={url}
                    width={60}
                    height={60}
                    alt="another looks of coin"
                    className="mr-[10px] last:mr-0"
                  />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
