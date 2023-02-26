import React from "react";
import * as S from "./styles.jsx";
import { RxDashboard } from "react-icons/rx";
import { RiTaskLine } from "react-icons/ri";
import { MENU } from "./constants.jsx";

export default function NavMenu() {
  return (
    <S.NavMenu>
      {MENU.map((item) => {
        return (
          <S.NavItem key={item.id} to={item.href}>
            <S.IconWrapper>{item.icon}</S.IconWrapper>
            <S.Title>{item.title}</S.Title>
          </S.NavItem>
        );
      })}
    </S.NavMenu>
  );
}
