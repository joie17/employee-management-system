import React, { createContext } from "react";

export const DataContext = createContext();

const Usercontext = ({ children }) => {
  const username = {
    username: "jainil kukrolia",
    age: 74,
    city: "ahemdabad",
  };

  return (
    <DataContext.Provider value={username}>{children}</DataContext.Provider>
  );
};

export default Usercontext;
