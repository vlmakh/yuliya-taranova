import styled from "@emotion/styled";
import { Section, Title } from "../Base/Base";

export const PricesWrap = styled(Section)`
  background-color: ${(p) => p.theme.colors.main};
  color: white;
`;

export const PricesTitle = styled(Title)``;

export const List = styled.ul`
  margin: 32px auto;
  list-style: none;
  gap: 16px;
  max-width: 480px;
`;

export const Item = styled.li`
  text-align: left;
  padding: 16px 16px;
  font-size: 24px;
  color: ${(p) => p.theme.colors.accent};
`;
