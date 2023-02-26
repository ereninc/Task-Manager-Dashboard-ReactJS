import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";

import HomePage from "./pages/home-page/";
import MainLayout from "./layouts/main-layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <MainLayout />,
          children: [
            {
              path: "/",
              element: <HomePage />,
            },
            // {
            //   path: "/test",
            //   element: <h1>TEST</h1>,
            // },
          ],
        },
      ])}
    ></RouterProvider>
  </React.StrictMode>
);
