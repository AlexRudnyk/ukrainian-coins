"use client";

import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

interface ContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  isReadCommentsOpen: boolean;
  setIsReadCommentsOpen: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: (): void => {},
  isReadCommentsOpen: false,
  setIsReadCommentsOpen: (): void => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isReadCommentsOpen, setIsReadCommentsOpen] = useState<boolean>(false);
  const [isReplyCommentOpen, setIsReplyCommentOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedIsLoggedInData = localStorage.getItem("isLoggedIn");

    if (storedIsLoggedInData) {
      try {
        const isLoggedInData = JSON.parse(storedIsLoggedInData);
        setIsLoggedIn(isLoggedInData);
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
      }
    }
  }, []);

  const handleSetIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> = (
    value
  ) => {
    // Set the value in state
    setIsLoggedIn((prev) => {
      // Ensure you can handle prevState when updating based on it
      if (typeof value === "function") {
        return value(prev);
      }
      return value;
    });
    localStorage.setItem("isLoggedIn", JSON.stringify(value));
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn: handleSetIsLoggedIn,
        isReadCommentsOpen,
        setIsReadCommentsOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
