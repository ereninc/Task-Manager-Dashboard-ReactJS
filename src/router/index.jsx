import HomePage from "../pages/home-page/";
import MainLayout from "../layouts/main-layout";
import { createBrowserRouter } from "react-router-dom";
import TasksPage, { tasksPageLoader } from "../pages/tasks-page";
import CreateTaskPage, {
  createTaskPageSubmitAction,
} from "../pages/create-task-page";

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
        loader: tasksPageLoader,
      },
      {
        path: "/tasks/create",
        element: <CreateTaskPage />,
        action: createTaskPageSubmitAction,
      },
      {
        path: "/test",
        element: <h1>TEST</h1>,
      },
    ],
  },
]);

export { router };
