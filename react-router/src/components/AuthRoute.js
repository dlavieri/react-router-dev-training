import React from "react";
import { Route, Navigate } from "react-router-dom";

const AuthRoute = ({ isAuthenticated, element, path }) => {
  if (isAuthenticated) return <Route path={path} element={element} />;

  return <Navigate to="/" replace />;
};

export default AuthRoute;
