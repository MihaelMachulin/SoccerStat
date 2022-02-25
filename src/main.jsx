import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import {BrowserRouter, HashRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
