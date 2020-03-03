import React, { useState, createContext } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  return (
    <MainContext.Provider value={{ message, setMessage }}>
      {children}
    </MainContext.Provider>
  );
};
