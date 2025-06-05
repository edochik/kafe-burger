import React from "react";
import s from "./ProtectedRoute.module.scss";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@shared/lib/hooks/hooks";

interface ProtectedRouteProps {
  element: React.ReactNode;
  hasAccess: boolean;
}

const ProtectedRoute = ({ element, hasAccess }: ProtectedRouteProps) => {
  const loading = useAppSelector((state) => state.profile.loading);
  if (loading === "pending") {
    return (
      <div className={s.ProtectedRoute}>
        <div className={s.loader}></div>
      </div>
    );
  }
  if (!hasAccess) {
    return <Navigate to="/not-found" />;
  }
  return <>{element}</>;
};

export { ProtectedRoute };
