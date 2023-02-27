import React from "react";
import { useLoaderData } from "react-router-dom";
import EmptyScreen from "./empty-screen/index.jsx";
import * as S from "./styles.jsx";

export default function TasksPageContainer() {
  const data = useLoaderData();

  return (
    <S.TasksPageContainer>
      {!data?.length ? <EmptyScreen /> : "task list"}
    </S.TasksPageContainer>
  );
}
