import styled from "styled-components"

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => (props.primary ? "var(--font-color)" : "")};
  margin-top: ${(props) => props.marginTop || ""};
`
export const Wrapper = styled.div`
  margin: ${(props) => props.margin || ""};
  margin-top: ${(props) => (props.marginTop ? "2rem" : "")};
`
