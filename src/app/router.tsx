// src/app/router.tsx
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { ProductPage } from "../widgets/ProductPage";
import { NotFoundPage } from "../pages/NotFoundPage/";
import { useEffect } from "react";
import { Location } from "./interface.js";
import { RegistrationModal } from "../features/RegistrationModal";
import { OrderModal } from "../features/OrderModal/";
import { AuthorizationModal } from "../features/AuthoModal/";
interface AppRouterProps {
  setPath: (arg: string) => void;
}

export const AppRouter = (props: AppRouterProps) => {
  const { setPath } = props;
  const location: Location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, [setPath, location.pathname]);

  return (
    <Routes>
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/" element={<Outlet />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/order" element={<OrderModal />} />
      <Route path="/registration" element={<RegistrationModal />} />
      <Route path="/authorization" element={<AuthorizationModal />} />
    </Routes>
  );
};
