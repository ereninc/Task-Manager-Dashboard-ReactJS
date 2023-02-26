import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -1px;
  height: 48px;
  width: 48px;
  font-size: var(--font-xl);
  padding: var(--space-m);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-m);
`;

export const Text = styled.p`
  font-size: var(--font-m);
  font-weight: var(--font-weight-bold);
  filter: drop-shadow(0 0 5px var(--text-color));
`;
