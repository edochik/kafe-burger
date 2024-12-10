import { Footer } from "../widgets/Footer";
import { Header } from "../widgets/Header";
import { useState } from "react";
import { AppRouter } from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "../pages/Main/";
import { NotFoundPage } from "../pages/NotFoundPage/";
import { paths } from "./helper";
import { Profile } from "../features/Profile/";

const App = () => {
  const [path, setPath] = useState("");
  console.log(path);
  return (
    <Router>
      <Header />
      {paths.includes(path) || path.includes("product") ? (
        <Main />
      ) : path.includes("profile") ? (
        <Profile />
      ) : (
        <NotFoundPage />
      )}
      <AppRouter setPath={setPath} />
      <Footer />
    </Router>
  );
};

export { App };
