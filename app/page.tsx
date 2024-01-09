import { getAllCoins } from "@/actions";
import { AdminForm, ImagesBox } from "@/components";
import { CoinType } from "@/types";
import Image from "next/image";

export default async function Home() {
  const coins: CoinType[] | undefined = await getAllCoins();

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
