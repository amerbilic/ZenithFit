import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/index";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <Router>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Router>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
