"use client";
import React, { createContext, useContext, useState } from "react";

const CheckboxContext = createContext<any>(false);

export const CheckboxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [checkboxState, setCheckboxState] = useState({});

  const handleToggle = (id) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const isChecked = (id) => {
    return checkboxState[id] || false;
  };
  return (
    <CheckboxContext.Provider value={{ isChecked, handleToggle }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckbox = () => useContext(CheckboxContext);
