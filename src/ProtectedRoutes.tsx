import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
type Props = {
    children:  JSX.Element 
  }
export  const ProtectedRoute = ({children} : Props) => {
  function isUserInLocalStorage() {
    const userData = localStorage.getItem("user");
    return !!userData; // Returns true if userData is not null or undefined
  }

  // Usage example
  const userExists = isUserInLocalStorage();

  if (userExists) {
    console.log("User data is present in localStorage");
    return children;
  } else {
    console.log("User data is not found in localStorage");
    return <Navigate to="/login" />;
  }
};
