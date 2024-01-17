"use client";

import React from "react";
import { useGlobalContext } from "@/context/store";

const Logout = () => {
  const { setIsLoggedIn } = useGlobalContext();

  const handleLogOutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <button type="button" onClick={handleLogOutClick} className="ml-5">
      <div className="bg-logout bg-cover bg-no-repeat bg-center w-[25px] h-[25px]" />
    </button>
  );
};

export default Logout;
