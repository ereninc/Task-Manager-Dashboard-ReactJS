import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  height: 100%;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: var(--font-xxl);
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: var(--font-m);
  color: var(--gray);
`;
