import ReactDOM from "react-dom/client";
import "normalize.css";
import "./shared/style/global.scss";
import { App } from "./app/App";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
