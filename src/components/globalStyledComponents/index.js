import styled from "styled-components"

export const Line = styled.div`
  width: ${(props) => props.lineWidth || "100%"};
  height: 2px;
  background-color: ${(props) =>
    props.primary ? "var(--font-color)" : "var(--grayish)"};
  margin-top: ${(props) => props.marginTop || ""};
  margin-bottom: ${(props) => props.marginBottom || ""};
`
export const Wrapper = styled.div`
  margin: ${(props) => props.margin || ""};
  margin-top: ${(props) => (props.marginTop ? "2rem" : "")};
`
