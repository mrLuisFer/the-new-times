import styled from "styled-components"

export const NavigationMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a {
    color: var(--gray);
    text-decoration: none;
    margin-right: 0.5rem;
    font-size: 0.7rem;

    &:hover {
      cursor: pointer;
      color: var(--darkBlueGrey);
      text-decoration: underline;
    }

    @media screen and (min-width: 440px) {
      font-size: 1rem;
      margin-right: 1rem;
    }
  }
`
