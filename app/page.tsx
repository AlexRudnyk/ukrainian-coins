import { getAllCoins } from "@/actions";
import { CoinsList, Hero } from "@/components";
import { CoinType } from "@/types";

export default async function Home() {
  const coins: CoinType[] | undefined = await getAllCoins();

  return (
    <main className="w-[1280px] mx-auto">
      <Hero />
      <CoinsList coins={coins} />
    </main>
  );
}
