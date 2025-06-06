import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "./authContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
