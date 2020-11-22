import styled from "styled-components"

// Convert to default styles for more usage

export const ExplanationComponentContainer = styled.div`
  text-align: left;
  margin: 0 auto;
  color: var(--font-color);
  user-select: text;
`
export const ExplanationComponentTitle = styled.h2`
  text-align: left;
`
export const ExplanationComponentTextContainer = styled.div`
  font-size: 1.2rem;
  margin: 1rem 10rem;
  padding: 1rem;
  transition: var(--transition);
  user-select: initial;

  &:hover {
    border-bottom: 1px solid #000000;
    border-radius: 10px 10px 0 0;
    box-shadow: 2px 1px 6px rgba(0, 0, 0, 0.7);
  }
`
export const TextBold = styled.span`
  font-weight: 700;
  color: #000;
  padding: 0.2rem;
  margin: 0 0.2rem;
  background-color: var(--lightGray);
  border-radius: 5px;
  user-select: auto;
  cursor: text;
`

export const TextParag = styled.p`
  margin: ${(props) => props.propsMargin || "0"};
  line-height: 1.5;
`
export const Anchor = styled.a`
  text-decoration: none;
  color: var(--darkBlueGrey);
  transition: 0.3s ease;
  user-select: initial;

  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
    color: blueviolet;
    opacity: 0.9;
  }
`
export const Icon = styled.i`
  margin: 0 0.4rem;
  opacity: 0.7;
`

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin: ${(props) => props.pMargin || "0"};
`
