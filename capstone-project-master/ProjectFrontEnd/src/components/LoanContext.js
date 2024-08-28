// LoanContext.js
import React, { createContext, useContext, useState } from "react";

const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
  const [loanData, setLoanData] = useState(null);

  const setLoan = (data) => {
    setLoanData(data);
  };

  return (
    <LoanContext.Provider value={{ loanData, setLoan }}>
      {children}
    </LoanContext.Provider>
  );
};

export const useLoan = () => {
  return useContext(LoanContext);
};
