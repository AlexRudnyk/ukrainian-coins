import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["cyrillic"], weight: "700" });

const Hero = () => {
  return (
    <div className="my-16">
      <h2 className={`${raleway.className} text-7xl mb-7 text-center`}>
        Колекціонуй моменти історії –
      </h2>
      <h2 className={`${raleway.className} text-5xl mb-12 text-center`}>
        стань героєм своєї колекції монет!
      </h2>
      <div className="w-full aspect-[2.56] bg-hero bg-cover bg-no-repeat bg-center rounded-3xl" />
    </div>
  );
};

export default Hero;
