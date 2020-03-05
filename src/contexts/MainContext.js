import React, { useState, createContext } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [typeMsg, setTypeMsg] = useState("default");
  const [backButtom, setBackButtom] = useState(false);
  const [teste, setTeste] = useState("change me!");

  return (
    <MainContext.Provider
      value={{
        message,
        setMessage,
        backButtom,
        setBackButtom,
        typeMsg,
        setTypeMsg
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
