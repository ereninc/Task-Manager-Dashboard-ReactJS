import HomePage from "../pages/home-page/";
import MainLayout from "../layouts/main-layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/test",
        element: <h1>TEST</h1>,
      },
    ],
  },
]);

export { router };
