import { Routes, Route, useLocation } from "react-router-dom";
import { ProductPage } from "@pages/ProductPage";
import { Registration } from "@features/Registration";
import { Order } from "@features/Order";
import { Authorization } from "@features/Authorization";
import { useAppSelector } from "../shared/lib/hooks/hooks";
import { Main } from "@pages/Main";
import { Profile } from "@pages/Profile";
import { NotFoundPage } from "@pages/NotFoundPage/";
import { HistoryOrders } from "@pages/HistoryOrders/";
import { CreateProduct } from "@pages/CreateProduct";
import { DeleteProduct } from "@pages/DeleteProduct/";
import { ProtectedRoute } from "@features/ProtectedRoute";

export const AppRouter = () => {
  const isAuth = useAppSelector((state) => state.profile.isAuthorization);
  const { role } = useAppSelector((state) => state.profile.data.user);

  const location = useLocation();
  const state = location.state as {
    modal?: boolean;
    background?: Location;
  } | null;

  return (
    <>
      <Routes location={state?.background || location}>
        <Route path="/" element={<Main />}>
          <Route
            path="history-order"
            element={
              <ProtectedRoute hasAccess={isAuth} element={<HistoryOrders />} />
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute hasAccess={isAuth} element={<Profile />} />
            }
          />
          <Route
            path="create-product"
            element={
              <ProtectedRoute
                hasAccess={"admin" === role}
                element={<CreateProduct />}
              />
            }
          />
          <Route
            path="delete-product"
            element={
              <ProtectedRoute
                hasAccess={"admin" === role}
                element={<DeleteProduct />}
              />
            }
          />
          <Route path="not-found" element={<NotFoundPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {state?.background && (
        <Routes>
          <Route path="order" element={<Order />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="registration" element={<Registration />} />
          <Route path="authorization" element={<Authorization />} />
        </Routes>
      )}
    </>
  );
};
