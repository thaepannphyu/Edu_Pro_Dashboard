import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { StateContextProvider } from "./components/context/StateContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </StateContextProvider>
);
