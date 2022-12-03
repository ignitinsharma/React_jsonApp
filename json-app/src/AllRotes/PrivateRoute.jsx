import { AuthContext } from "../Context/AuthContext";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuth, handleToggle } = useContext(AuthContext);
  /* 
    --> If user isn't logged in so Send user to login page
    */
  if (isAuth==false) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

export default PrivateRoute;
