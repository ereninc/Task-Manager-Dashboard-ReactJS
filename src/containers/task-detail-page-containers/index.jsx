import React from "react";
import { Form, useLoaderData, useFetcher } from "react-router-dom";
import * as S from "./styles.jsx";

export default function TaskDetailPageContainer() {
  const task = useLoaderData();
  console.log(task);

  const fetcher = useFetcher();

  const updateCompleted = (event) => {
    console.log(event.target.checked);
    fetcher.submit(
      { idle: true },
      {
        method: "PATCH",
        // body: JSON.stringify({
        //   completed: event.target.checked,
        // }),
      }
    );
  };

  return (
    <S.TaskDetailPageContainer>
      <S.EditButton to={`/tasks/${task.id}/edit`}>Edit</S.EditButton>
      <S.TaskDetail>
        <fetcher.Form method="post">
          <S.Status completed={task.completed}>
            <input
              hidden
              type="checkbox"
              name="completed"
              defaultChecked={task.completed}
              onChange={updateCompleted}
            />
            {task.completed ? "Completed" : "Not completed"}
          </S.Status>
        </fetcher.Form>
        <S.Name>{task.taskName}</S.Name>
        <S.Description>{task.taskDescription}</S.Description>
      </S.TaskDetail>
    </S.TaskDetailPageContainer>
  );
}
