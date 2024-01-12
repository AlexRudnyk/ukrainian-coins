"use client";

import React, { useState } from "react";
// import { Formik, Form, Field } from "formik";

interface FiltersProps {
  getYear: (year: string) => void;
}

const Filters = ({ getYear }: FiltersProps) => {
  const [optionYear, setOptionYear] = useState<string>("");

  //   const handleFilterSubmit = ({ year }: { year: string }) => {
  //     getYear(year);
  //   };

  return (
    <div className="p-7 flex items-center">
      <p className="mr-10">Фільтри:</p>
      {/* <Formik initialValues={{ year: "" }} onSubmit={() => {}}> */}
      {/* {({ values, setFieldValue }) => ( */}
      <form>
        <select
          //   as="select"
          name="year"
          value={optionYear}
          className="p-2 border border-black rounded-full bg-white w-20 mr-5"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            // setFieldValue("year", e.target.value);
            setOptionYear(e.target.value);
            getYear(e.target.value);
          }}
        >
          <option value="">Рік</option>
          <option value="2009">2009</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
        </select>
        {/* <button type="submit">Ввести</button> */}
      </form>
      {/* )} */}
      {/* </Formik> */}
    </div>
  );
};

export default Filters;
