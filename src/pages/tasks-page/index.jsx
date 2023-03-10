import React from "react";
import * as S from "./styles.jsx";
import { getTasks } from "../../services/task";
import TasksPageContainer from "../../containers/tasks-page-containers/index.jsx";

export default function TasksPage() {
  return <TasksPageContainer />;
}

export const tasksPageLoader = () => {
  return getTasks();
};
