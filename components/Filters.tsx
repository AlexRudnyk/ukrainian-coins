"use client";

import React, { useEffect, useState } from "react";

interface FiltersProps {
  getYear: (year: string) => void;
}

const Filters = ({ getYear }: FiltersProps) => {
  const [optionYear, setOptionYear] = useState<string>(
    typeof window !== "undefined" ? localStorage.getItem("year") || "" : ""
  );

  useEffect(() => {
    getYear(optionYear);
  }, [optionYear]);

  return (
    <div className="p-7 flex items-center">
      <p className="mr-10">Фільтри:</p>
      <form>
        <label htmlFor="year" className="mr-5">
          Рік випуску
        </label>
        <select
          name="year"
          id="year"
          value={optionYear}
          className="p-2 border border-black rounded-full bg-white w-20 mr-5"
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
    </div>
  );
};

export default Filters;
