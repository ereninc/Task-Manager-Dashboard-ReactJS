import React from "react";
import * as S from "./styles.jsx";
import TaskEditPageContainer from "../../containers/task-edit-page-container/index.jsx";
import { getTask, updateTask } from "../../services/task/index.jsx";
import { redirect } from "react-router-dom";

export default function TaskEditPage() {
  return <TaskEditPageContainer />;
}

export const taskEditPageLoader = ({ params }) => {
  return getTask(params.id);
};

export const taskEditPageSubmitAction = async ({ params, request }) => {
  const formData = await request.formData();
  const taskName = formData.get("task-name");
  const taskDescription = formData.get("task-description");
  const completed = formData.get("task-completed") === "on";
  const id = formData.get("id");

  const task = {
    id: params.id,
    taskName,
    taskDescription,
    completed,
  };

  await updateTask(task);

  return redirect(`/tasks/${params.id}`);
};
