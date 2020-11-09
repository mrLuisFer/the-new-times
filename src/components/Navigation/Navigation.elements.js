import styled from "styled-components"

export const NavigationMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a {
    color: var(--gray);
    text-decoration: none;
    margin-right: 1rem;
    &:hover {
      cursor: pointer;
      color: var(--darkBlueGrey);
      text-decoration: underline;
    }
  }
`
