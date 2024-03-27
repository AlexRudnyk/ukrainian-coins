"use client";

import React, { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Filters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [optionYear, setOptionYear] = useState<string>("");
  const [optionTitle, setOptionTitle] = useState<string>("");

  const handleYearSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionYear(e.target.value);
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("year", e.target.value);
    } else {
      params.delete("year");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleTitleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionTitle(e.target.value);
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("title", e.target.value);
    } else {
      params.delete("title");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="p-10 md:flex items-center">
      <p className="mo:mb-5 sm:mb-5 md:mb-0 md:mr-10">Фільтри:</p>
      <form>
        <label htmlFor="year" className="mo:mr-[116px] sm:mr-[116px] md:mr-5">
          Рік випуску
        </label>
        <select
          name="year"
          id="year"
          value={optionYear}
          className="p-2 border border-black rounded-full bg-white w-[120px] md:mr-5 cursor-pointer"
          onChange={handleYearSelect}
        >
          <option value="">Всі</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          {/* <option value="2001">2001</option>
          <option value="2009">2009</option>
          <option value="2011">2011</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option> */}
        </select>
      </form>
      <p className="mr-5">або</p>
      <form>
        <label htmlFor="title" className="mo:mr-20 sm:mr-20 md:mr-5">
          Номінал монети
        </label>
        <select
          name="title"
          id="title"
          value={optionTitle}
          className="p-2 border border-black rounded-full bg-white w-[120px] cursor-pointer"
          onChange={handleTitleSelect}
        >
          <option value="">Всі</option>
          <option value="1 копійка">1 копійка</option>
          <option value="2 копійки">2 копійки</option>
          <option value="5 копійок">5 копійок</option>
          <option value="10 копійок">10 копійок</option>
          <option value="25 копійок">25 копійок</option>
          <option value="50 копійок">50 копійок</option>
          <option value="1 гривня">1 гривня</option>
        </select>
      </form>
    </div>
  );
};

export default Filters;
