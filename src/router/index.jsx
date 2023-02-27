import HomePage from "../pages/home-page/";
import MainLayout from "../layouts/main-layout";
import { createBrowserRouter } from "react-router-dom";
import TasksPage, { tasksPageLoader } from "../pages/tasks-page";
import CreateTaskPage, {
  createTaskPageSubmitAction,
} from "../pages/create-task-page";
import TaskDetailPage, {
  taskDetailPageLoader,
  updateTaskDetailAction,
} from "../pages/task-detail-page";
import TaskEditPage, {
  taskEditPageLoader,
  taskEditPageSubmitAction,
} from "../pages/task-edit-page";
import NotFoundPage from "../pages/not-found-page";
import Settings from "../pages/settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        errorElement: <NotFoundPage />,
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
            path: "/tasks/:id",
            element: <TaskDetailPage />,
            loader: taskDetailPageLoader,
            action: updateTaskDetailAction,
          },
          {
            path: "/tasks/:id/edit",
            element: <TaskEditPage />,
            loader: taskEditPageLoader,
            action: taskEditPageSubmitAction,
          },
          {
            path: "/settings",
            element: <Settings />,
            errorElement: <h1>An error occured at Settings Page!</h1>,
          },
          {
            path: "/test",
            element: <h1>TEST</h1>,
          },
          {
            path: "/*",
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
]);

export { router };
