import styled from "styled-components"

export const NewsContainer = styled.div`
  width: 100%;
`
export const NewsCard = styled.div`
  margin: ${(props) => props.pMargin || "10px"};
  margin-bottom: 30px;
  border-radius: 10px;
`

export const NewsImg = styled.img`
  display: ${(props) => (props.noimg === " " ? "none" : "block")};
  border-radius: 10px;
  width: 100%;
`
export const NewsTitle = styled.h1`
  font-size: 18px;
  margin-top: 1rem;
  color: var(--font-color);
`
export const NewsWrapper = styled.div`
  padding: 15px;
  padding-top: 10px;
  margin: ${(props) => props.pMargin || "0"};
`
export const NewsContent = styled.p`
  font-size: 14px;
  line-height: 1.5;
  text-align: justify;
  color: var(--font-color);
  margin-top: ${(props) => props.mTop || "0"};
`
export const NewsFlex = styled.div`
  display: flex;
  align-content: center;
  justify-content: ${(props) => props.justify || "flex-start"};
  margin: ${(props) => props.pMargin || "0"};
  margin-top: ${(props) => props.mTop || "0"};
`

export const NewsPublishedAt = styled.p`
  font-size: 9px;
  color: var(--gray);
  font-weight: 300;
  margin: ${(props) => props.pMargin || "0"};
`

export const NewsAuthor = styled.p`
  font-size: 10px;
  font-weight: 300;
  color: var(--gray);
  margin: ${(props) => props.pMargin || "0"};
`
