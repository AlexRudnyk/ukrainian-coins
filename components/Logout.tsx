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
      Logout
    </button>
  );
};

export default Logout;
