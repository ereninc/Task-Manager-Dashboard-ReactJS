import React from "react";
import * as S from "./styles.jsx";
import Logo from "./logo";
import NavMenu from "../navmenu/index.jsx";

export default function Sidebar() {
  return (
    <S.Sidebar>
      <Logo />
      <NavMenu />
    </S.Sidebar>
  );
}
