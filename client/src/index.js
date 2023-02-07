import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";

//axios defaults config (to be verified)
Axios.defaults.baseURL = "http://localhost:3001/api/";
Axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
Axios.defaults.headers.post["Content-Type"] = "application/json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
