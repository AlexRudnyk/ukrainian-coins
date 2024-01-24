import { getCoinById } from "@/actions";
import { CommentsBlock, ImagesBox, ReadComments } from "@/components";
import { CoinType, CommentType } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function CoinCard({ params }: { params: { id: string } }) {
  const coin: CoinType = await getCoinById(params.id);

  const commentsNumber = coin?.comments?.length;
  const comments = coin.comments?.map((comment: CommentType) => ({
    _id: comment._id?.toString(),
    userName: comment.userName,
    text: comment.text,
    date: comment.date,
    reply: comment.reply,
  }));

  return (
    <div className="mo:max-w-[480px] sm:w-[480px] md:w-[768px] lg:w-[1280px] mx-auto mt-12 p-5">
      <Link
        href="/"
        className="underline inline-block mb-10 text-xl ml-10 relative"
      >
        <span className="before:absolute before:content-'' before:w-6 before:h-6 before:left-[-30px] before:top-[3px] before:bg-[url('/left-arrow-svgrepo-com.svg')]" />
        На головну
      </Link>
      <div className="flex mo:flex-col sm:flex-col md:flex-row mb-10">
        <div className="lg:mx-24 md:mr-5 p-3 bg-white rounded-md mo:mb-8 sm:mb-8 md:mb-0 md:w-1/3 md:h-fit">
          <Image
            src={coin.photoURL[0].toString()}
            width={300}
            height={300}
            alt="Specific coin"
            className="w-full h-auto mb-3"
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
        <div className="flex flex-col justify-between md:w-2/3">
          <div className="mo:mb-8 sm:mb-8 md:mb-0">
            <p className="text-3xl md:text-2xl lg:text-3xl mb-5">
              <span className="text-gray-500">Номінал монети: </span>
              {coin.title}
            </p>
            <p className="text-3xl md:text-2xl lg:text-3xl mb-5">
              <span className="text-gray-500">Рік випуску: </span>
              {coin.year}
            </p>
            <p className="text-3xl md:text-2xl lg:text-3xl mb-5">
              <span className="text-gray-500">Штамп: </span> {coin.spec}
            </p>
            <p className="text-3xl md:text-2xl lg:text-3xl mb-5 text-justify">
              <span className="text-gray-500">Опис: </span> {coin.description}
            </p>
            {coin.price === "за домовленістю" ? (
              <p className="text-3xl md:text-2xl lg:text-3xl mb-8">
                <span className="text-gray-500">Орієнтовна ціна: </span>
                {coin.price}
              </p>
            ) : (
              <p className="text-3xl md:text-2xl lg:text-3xl mb-8">
                <span className="text-gray-500">Орієнтовна ціна: </span>
                {coin.price} USD
              </p>
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
