import React from "react";
import TaskDetailPageContainer from "../../containers/task-detail-page-containers";
import { completeTask, getTask } from "../../services/task";

export default function TaskDetailPage() {
  return <TaskDetailPageContainer />;
}

export const taskDetailPageLoader = async ({ params }) => {
  return getTask(params.id);
};

export const updateTaskDetailAction = async ({ params }) => {
  return completeTask(params.id);
};
