import styled from "styled-components"

export const NavSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`
export const NavTitle = styled.h2`
  font-size: 0.9rem;

  a {
    color: var(--font-color);
    cursor: default;
    margin-left: 3px;
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (min-width: 440px) {
    font-size: 1.45rem;
  }
`
