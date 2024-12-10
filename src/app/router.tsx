import { Routes, Route, Outlet, useLocation, Navigate, useNavigate } from "react-router-dom";
import { ProductPage } from "../widgets/ProductPage";
// import { NotFoundPage } from "../pages/NotFoundPage/";
import { useEffect } from "react";
import { Location } from "./interface.js";
import { RegistrationModal } from "../features/RegistrationModal";
import { OrderModal } from "../features/OrderModal/";
import { AuthorizationModal } from "../features/AuthoModal/";
import { useAppSelector } from "../shared/lib/hooks/hooks";
// import { Profile } from "../features/Profile";
interface AppRouterProps {
  setPath: (arg: string) => void;
}

export const AppRouter = (props: AppRouterProps) => {
  const isAuth = useAppSelector((state) => state.user.isAuthorization);
  const { setPath } = props;
  const location: Location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [setPath, location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Outlet />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/order" element={<OrderModal />} />
      <Route
        path="/registration"
        element={!isAuth ? <RegistrationModal /> : <Navigate to="/" replace />}
      />
      <Route
        path="/authorization"
        element={!isAuth ? <AuthorizationModal /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
};
