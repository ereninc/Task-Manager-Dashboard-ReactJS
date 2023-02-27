import React from "react";
import * as S from "./styles.jsx";

import { Form } from "react-router-dom";

export default function CreateTaskPageContainer() {
  return (
    <S.CreateTaskPageContainer>
      <Form method="post">
        <input type="text" name="task-name" placeholder="Task name" />
        <textarea name="task-description" placeholder="Description" />
        <button type="submit">Submit</button>
      </Form>
    </S.CreateTaskPageContainer>
  );
}
