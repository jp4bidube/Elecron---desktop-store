import React, { useState, createContext } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [backButtom, setBackButtom] = useState(false);

  return (
    <MainContext.Provider
      value={{ message, setMessage, backButtom, setBackButtom }}
    >
      {children}
    </MainContext.Provider>
  );
};
