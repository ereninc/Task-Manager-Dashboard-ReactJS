import React from "react";
import * as S from "./styles.jsx";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <S.Main>
      <Outlet />
    </S.Main>
  );
}
