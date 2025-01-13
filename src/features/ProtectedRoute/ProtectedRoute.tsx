import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: React.ReactNode;
  hasAccess: boolean;
}

export const ProtectedRoute = ({ element, hasAccess }: ProtectedRouteProps) => {
  if (!hasAccess) {
    return <Navigate to="/not-found" />;
  }
  return <>{element}</>;
};
