import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [isAuth, setisAuth] = useState(true)

    function handleToggle() {
        setisAuth(!isAuth)
    }

  return <AuthContext.Provider value={{isAuth,handleToggle}}>{children}</AuthContext.Provider>;
};
