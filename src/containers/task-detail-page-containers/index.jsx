import React, { useEffect, useState } from "react";
import { Form, useLoaderData, useFetcher } from "react-router-dom";
import * as S from "./styles.jsx";
import Loading from "../../components/loading";

export default function TaskDetailPageContainer() {
  const task = useLoaderData();

  const fetcher = useFetcher();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateCompleted = (event) => {
    console.log(event.target.checked);
    setIsSubmitting(true);
    fetcher.submit(
      { idle: true },
      {
        method: "PATCH",
      }
    );
  };

  useEffect(() => {
    setIsSubmitting(false);
  }, [task]);

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
            {isSubmitting && <Loading />}
          </S.Status>
        </fetcher.Form>
        <S.Name>{task.taskName}</S.Name>
        <S.Description>{task.taskDescription}</S.Description>
      </S.TaskDetail>
    </S.TaskDetailPageContainer>
  );
}
