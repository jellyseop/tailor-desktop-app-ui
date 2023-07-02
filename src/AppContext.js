import dayjs from "dayjs";
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [date, setDate] = useState(dayjs("2023-07-01"));
  const [validCondition, setValidCondition] = useState("unused");
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [memo, setMemo] = useState("");

  const contextValue = {
    date,
    setDate,
    validCondition,
    setValidCondition,
    selected,
    setSelected,
    name,
    setName,
    phone,
    setPhone,
    code,
    setCode,
    memo,
    setMemo,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
