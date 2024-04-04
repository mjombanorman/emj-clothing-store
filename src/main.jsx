import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistore } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persistore}>
          <App />
        </PersistGate>
      
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
