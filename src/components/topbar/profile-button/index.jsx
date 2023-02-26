import React from "react";
import * as S from "./styles.jsx";

export default function ProfileButton() {
  return (
    <S.ProfileButton>
      <S.Image
        src="https://avatars.githubusercontent.com/u/24496846?s=400&u=f5729d248ba4d7de9bc71224fafb6b89aa773f9d&v=4"
        alt="Eren "
      />
      <S.Content>
        <S.Text>Eren</S.Text>
        <S.Subtitle>Admin</S.Subtitle>
      </S.Content>
    </S.ProfileButton>
  );
}
