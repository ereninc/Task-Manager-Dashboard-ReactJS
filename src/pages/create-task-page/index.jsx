import React from "react";
import CreateTaskContainer from "../../containers/create-task-page-containers";
import { addTask } from "../../services/task";

export default function CreateTaskPage() {
  return <CreateTaskContainer />;
}

export const createTaskPageSubmitAction = async ({ request }) => {
  const formData = await request.formData();

  const id = Math.random().toString(36).substr(2, 9);
  const taskName = formData.get("task-name");
  const taskDescription = formData.get("task-description");

  const newTask = {
    id,
    taskName,
    taskDescription,
    completed: false,
  };

  await addTask(newTask);

  //   console.log(formData.get("task-name"), formData.get("task-description"));
  return 0;
};
