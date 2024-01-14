import { getCoinById } from "@/actions";
import { CommentsBlock, ImagesBox, ReadComments } from "@/components";
import { CoinType, CommentType } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function CoinCard({ params }: { params: { id: string } }) {
  const coin: CoinType = await getCoinById(params.id);

  const commentsNumber = coin.comments?.length;
  const comments = coin.comments?.map((comment: CommentType) => ({
    _id: comment._id?.toString(),
    userName: comment.userName,
    text: comment.text,
    date: comment.date,
    reply: comment.reply,
  }));

  return (
    <div className="w-[1280px] mx-auto mt-12 pb-5">
      <Link
        href="/"
        className="underline inline-block mb-10 text-xl ml-10 relative"
      >
        <span className="before:absolute before:content-'' before:w-6 before:h-6 before:left-[-30px] before:top-[3px] before:bg-[url('/left-arrow-svgrepo-com.svg')]" />
        На головну
      </Link>
      <div className="flex mb-10">
        <div className="mx-24 p-3 bg-white rounded-md">
          <Image
            src={coin.photoURL[0].toString()}
            width={300}
            height={300}
            alt="Specific coin"
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
        <div className=" flex flex-col justify-between">
          <div>
            <p className="text-3xl mb-5">Номінал монети: {coin.title}</p>
            <p className="text-3xl mb-5">Рік випуску: {coin.year}</p>
            <p className="text-3xl mb-5">Штамп: {coin.spec}</p>
            <p className="text-3xl mb-5">Опис: {coin.description}</p>
            {coin.price === "за домовленістю" ? (
              <p className="text-3xl">Орієнтовна ціна: {coin.price}</p>
            ) : (
              <p className="text-3xl">Орієнтовна ціна: {coin.price} USD</p>
            )}
          </div>
          <div>
            <CommentsBlock id={params.id} commentsNumber={commentsNumber} />
          </div>
        </div>
      </div>
      <ReadComments comments={comments} id={params.id} />
    </div>
  );
}
