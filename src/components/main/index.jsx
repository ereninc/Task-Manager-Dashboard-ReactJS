import React from "react";
import * as S from "./styles.jsx";
import { Outlet, useNavigation } from "react-router-dom";

export default function Main() {
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <S.Main isLoading={navigation.state !== "idle"}>
      <Outlet />
    </S.Main>
  );
}
