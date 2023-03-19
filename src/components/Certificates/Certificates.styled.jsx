import styled from "styled-components";
import { Section, Title } from "../Base/Base";

export const CertWrap = styled(Section)`
  background-color: white;
`;

export const CertTitle = styled(Title)`
  font-family: ${(p) =>
    p.lang === "uk" ? p.theme.fonts.logo2 : p.theme.fonts.logo};
  color: ${(p) => p.theme.colors.main};
`;

export const CertList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: ${(p) => p.theme.space[4]}px;
  margin-top: ${(p) => p.theme.space[5]}px;

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

export const CertItem = styled.li`
  @media (max-width: 480px) {
    max-width: 420px;
  }

  @media (min-width: 481px) {
    max-width: 540px;
  }
`;
