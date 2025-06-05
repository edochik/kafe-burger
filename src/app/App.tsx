import { Footer } from "@shared/ui/Footer/";
import { Header } from "@widgets/Header";
import { AppRouter } from "./AppRouter";
import { HashRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  );
};

export { App };
