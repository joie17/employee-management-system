import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utills/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: [] });

  useEffect(() => {
    setLocalStorage(); // ✅ set sample data if needed
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
