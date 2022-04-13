import Admin from "../Admin";
import React from "react";
import { Navigate } from "react-router-dom";
import authenticationService from "services/authenticationService";

const PrivateRoute = () => {
  // const user = authenticationService.currentUserValue;
  // return !user || !user.roles ? (
  //   <Navigate to="/login" />
  // ) : user.roles.includes("ROLE_ADMIN") ? (
  //   <Admin />
  // ) : (
  //   <Navigate to="/login" />
  // );
  return <Admin />
};
export default PrivateRoute;
