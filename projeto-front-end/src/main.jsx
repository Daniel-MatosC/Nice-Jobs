import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import UserProvider from "./context/User";
import ServicesProvider from "./context/Services";
import { ToastContainer } from "react-toastify";

import App from "./App";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ServicesProvider>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </ServicesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
