import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["cyrillic"], weight: "700" });

const Hero = () => {
  return (
    <div className="mt-16">
      <h2 className={`${raleway.className} text-7xl mb-7 text-center`}>
        Колекціонуй моменти історії –
      </h2>
      <h2 className={`${raleway.className} text-5xl mb-12 text-center`}>
        стань героєм своєї колекції монет!
      </h2>
      <div className="w-[1280px] h-[500px] bg-hero bg-contain bg-no-repeat rounded-3xl" />
    </div>
  );
};

export default Hero;
