import { Routes, Route, Navigate } from "react-router-dom";
import { ProductPage } from "../pages/ProductPage";
import { RegistrationModal } from "../features/RegistrationModal";
import { OrderModal } from "../features/OrderModal";
import { AuthorizationModal } from "../features/AuthorizationModal";
import { useAppSelector } from "../shared/lib/hooks/hooks";
import { Main } from "../pages/Main";
import { Profile } from "../pages/Profile";
import { NotFoundPage } from "../pages/NotFoundPage/";
import { HistoryOrders } from "../pages/HistoryOrders/";
import { CreateProduct } from "../pages/CreateProduct";
import { DeleteProduct } from "../pages/DeleteProduct/";

export const AppRouter = () => {
  const isAuth = useAppSelector((state) => state.profile.isAuthorization);
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
      <Route path="/history-order" element={<HistoryOrders />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path="/delete-product" element={<DeleteProduct />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
