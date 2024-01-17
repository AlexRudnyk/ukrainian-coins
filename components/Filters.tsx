"use client";

import React, { useEffect, useState } from "react";

interface FiltersProps {
  getYear: (year: string) => void;
  getTitle: (title: string) => void;
}

const Filters = ({ getYear, getTitle }: FiltersProps) => {
  const [optionYear, setOptionYear] = useState<string>(
    typeof window !== "undefined" ? localStorage.getItem("year") || "" : ""
  );
  const [optionTitle, setOptionTitle] = useState<string>(
    typeof window !== "undefined" ? localStorage.getItem("title") || "" : ""
  );

  useEffect(() => {
    getYear(optionYear);
    getTitle(optionTitle);
  }, [optionYear, optionTitle]);

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
          className="p-2 border border-black rounded-full bg-white w-[120px] md:mr-5"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setOptionYear(e.target.value);
            localStorage.setItem("year", e.target.value);
          }}
        >
          <option value="">Всі</option>
          <option value="1994">1994</option>
          <option value="2001">2001</option>
          <option value="2009">2009</option>
          <option value="2011">2011</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
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
          className="p-2 border border-black rounded-full bg-white w-[120px]"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setOptionTitle(e.target.value);
            localStorage.setItem("title", e.target.value);
          }}
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
