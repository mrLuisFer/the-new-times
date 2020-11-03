import styled from "styled-components"

export const NavigationMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a {
    padding-top: 2rem;
    color: var(--gray);
    text-decoration: none;
    margin-right: 1rem;
    &:hover {
      cursor: pointer;
    }
  }
`
