import React from "react";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import Main from "../../components/main";
import * as S from "./styles";

export default function MainLayout() {
  return (
    <S.MainLayout>
      <Sidebar />
      <Topbar />
      <Main />
    </S.MainLayout>
  );
}
