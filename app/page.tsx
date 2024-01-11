import { getAllCoins } from "@/actions";
import { CoinsList, Hero } from "@/components";
import { CoinType } from "@/types";

export default async function Home() {
  const coins: CoinType[] | undefined = await getAllCoins();

  const plainCoins = coins?.map((coin: CoinType) => ({
    _id: coin._id?.toString(),
    title: coin.title,
    year: coin.year,
    photoURL: coin.photoURL,
    spec: coin.spec,
    price: coin.price,
    description: coin.description,
  }));

  return (
    <main className="w-[1280px] mx-auto">
      <Hero />
      <CoinsList coins={plainCoins} />
    </main>
  );
}
