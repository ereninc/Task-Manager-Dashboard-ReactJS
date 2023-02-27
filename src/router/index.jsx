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
        path: "/test",
        element: <h1>TEST</h1>,
      },
    ],
  },
]);

export { router };
