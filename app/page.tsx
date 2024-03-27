import { getAllCoins } from "@/actions";
import { CoinsList, Hero } from "@/components";
import { CoinType } from "@/types";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const pageNumber =
    searchParams.page !== null && searchParams.page > 0 ? searchParams.page : 1;

  const response = await getAllCoins(pageNumber);

  const coins: CoinType[] | undefined = response?.coins;
  const count: number | undefined = response?.count;

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
    <main className="mo:max-w-[480px] sm:w-[480px] md:w-[768px] lg:w-[1280px] mx-auto">
      <Hero />
      <CoinsList coins={plainCoins} count={count} />
    </main>
  );
}
