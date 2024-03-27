"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const BackLink = () => {
  const router = useRouter();

  return (
    <Link
      href="#"
      onClick={() => {
        router.back();
      }}
      scroll={false}
      className="underline inline-block mb-10 text-xl ml-10 relative"
    >
      <span className="before:absolute before:content-'' before:w-6 before:h-6 before:left-[-30px] before:top-[3px] before:bg-[url('/left-arrow-svgrepo-com.svg')]" />
      Назад
    </Link>
  );
};

export default BackLink;
