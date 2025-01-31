import s from "./Main.module.scss";
import { RadioButtons } from "../../features/RadioButtons/";
import { ProductList } from "../../features/Cards";
import { Cart } from "../../features/Cart/";
import { Outlet, useLocation } from "react-router-dom";
import { Sort } from "../../features/Sort/";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
const Main = () => {
  const stat = useAppSelector((state) => state);
  console.log(stat);
  const location = useLocation();
  const showMainContent = location.pathname === "/";
  return (
    <main className={s.Main}>
      {showMainContent ? (
        <>
          <div className={s.header}>
            <RadioButtons />
            <Sort />
          </div>
          <div className={s.content}>
            <Cart />
            <ProductList />
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </main>
  );
};

export { Main };
