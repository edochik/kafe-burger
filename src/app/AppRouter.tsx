import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { ProductPage } from "../widgets/ProductPage";
import { RegistrationModal } from "../features/RegistrationModal";
import { OrderModal } from "../features/OrderModal";
import { AuthorizationModal } from "../features/AuthoModal";
import { useAppSelector } from "../shared/lib/hooks/hooks";
import { Main } from "../pages/Main";
import { Profile } from "../pages/Profile";
import { NotFoundPage } from "../pages/NotFoundPage/";

export const AppRouter = () => {
  const isAuth = useAppSelector((state) => state.user.isAuthorization);
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="/order" element={<OrderModal />} />
        <Route
          path="/registration"
          element={
            !isAuth ? <RegistrationModal /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/authorization"
          element={
            !isAuth ? <AuthorizationModal /> : <Navigate to="/" replace />
          }
        />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
