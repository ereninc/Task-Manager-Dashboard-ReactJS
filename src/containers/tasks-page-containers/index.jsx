import React from "react";
import { useLoaderData } from "react-router-dom";
import EmptyScreen from "./empty-screen/index.jsx";
import * as S from "./styles.jsx";

export default function TasksPageContainer() {
  const tasks = useLoaderData();

  return (
    <S.TasksPageContainer>
      {!tasks?.length ? (
        <EmptyScreen />
      ) : (
        <>
          <S.Button to="/tasks/create">Create Task</S.Button>
          <S.TasksList>
            {tasks.map((task) => (
              <S.TaskListItem key={task.id}>
                <S.Task to={`/tasks/${task.id}`} isCompleted={task.completed}>
                  <S.TaskCompleted>
                    {task.completed ? "Completed" : "Not completed"}
                  </S.TaskCompleted>
                  <S.TaskName>{task.taskName}</S.TaskName>
                  <S.TaskDescription>{task.taskDescription}</S.TaskDescription>
                </S.Task>
              </S.TaskListItem>
            ))}
          </S.TasksList>
        </>
      )}
    </S.TasksPageContainer>
  );
}
