import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["cyrillic"], weight: "700" });

const Hero = () => {
  return (
    <div className="pt-16 p-5">
      <h2
        className={`${raleway.className} mo:text-4xl sm:text-5xl md:text-7xl mo:mb-2 sm:mb-4 md:mb-7 text-center`}
      >
        Колекціонуй моменти історії –
      </h2>
      <h2
        className={`${raleway.className} mo:text-2xl sm:text-3xl md:text-5xl mo:mb-8 sm:mb-10 mb-12 text-center`}
      >
        стань героєм своєї колекції монет!
      </h2>
      <div className="w-full mo:aspect-[1] md:aspect-[2.56] mo:bg-hero_mob md:bg-hero bg-cover bg-no-repeat bg-center rounded-3xl" />
    </div>
  );
};

export default Hero;
