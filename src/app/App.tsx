import { Footer } from "../widgets/Footer";
import { Header } from "../widgets/Header";
import { useState } from "react";
import { AppRouter } from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "../pages/Main/";
import { NotFoundPage } from "../pages/NotFoundPage/";
import { paths } from "./helper";

const App = () => {
  const [path, setPath] = useState("");

  return (
    <Router>
      <Header />
      {path.includes("product") ? (
        <Main />
      ) : paths.includes(path) ? (
        <Main />
      ) : (
        <NotFoundPage />
      )}
      <AppRouter setPath={setPath} />
      <Footer />
    </Router>
  );
};

export { App };
