import React from "react";
import * as S from "./styles.jsx";
import { VscEmptyWindow } from "react-icons/vsc";

export default function EmptyScreen() {
  return (
    <S.EmptyScreen>
      <VscEmptyWindow />
      <S.Title>There is no task created yet.</S.Title>
      <S.Subtitle>Click on the button below to create the first one</S.Subtitle>
      <S.Button to="/tasks/create">Create Task</S.Button>
    </S.EmptyScreen>
  );
}
