import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const { isAuth, handleToggle } = useContext(AuthContext);
const PrivateRoute = ({ children }) => {
  /* 
    --> If user isnt login so send user to login page

    */
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
