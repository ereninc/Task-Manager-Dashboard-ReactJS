import HomePage from "../pages/home-page/";
import MainLayout from "../layouts/main-layout";
import { createBrowserRouter } from "react-router-dom";
import TasksPage from "../pages/tasks-page";

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
        path: "/tasks",
        element: <TasksPage />,
      },
      {
        path: "/test",
        element: <h1>TEST</h1>,
      },
    ],
  },
]);

export { router };
