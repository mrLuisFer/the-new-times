import styled from "styled-components"

export const CardNews = styled.div`
  width: 100%;
  color: var(--font-color);
  font-size: 0.9rem;
  margin: 0;
  margin-bottom: 2.5rem;
  height: 555px;
  display: flex;
  flex-wrap: wrap;
  text-align: justify;
  padding: 0 0.8rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #000000;
  transition: var(--transition);

  &:hover {
    border-radius: 10px 10px 0 0;
    box-shadow: 1.5px 2px 10px var(--lightBlueGrey);
  }

  @media screen and (min-width: 810px) {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    padding: 2rem 0.8rem;
    height: 330px;
    text-align: left;
    overflow: hidden;
  }

  @media screen and (min-width: 780px) {
    max-height: 350px;
    height: auto;
  }

  @media screen and (min-width: 1300px) {
    padding: 2rem 0;
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
  }
`
export const CardImg = styled.img`
  width: 100%;
  height: 250px;
  max-height: 260px;
  border-radius: 10px;

  @media screen and (min-width: 810px) {
    width: 100%;
    max-height: 240px;
    max-width: 360px;
    transition: var(--transition);

    &:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 1300px) {
    max-width: 310px;
    height: 100%;
    /* max-height: 200px; */
  }
`
export const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;

  @media screen and (min-width: 1300px) {
    font-size: 1rem;
  }
`
export const CardContent = styled.p`
  line-height: 1.45;
  margin: 0 0.5rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.3px;
  color: var(--darkBlueGrey);

  @media screen and (min-width: 810px) {
    margin: 0;
    margin-bottom: 3rem;
    line-height: 1.7;
  }

  @media screen and (min-width: 1300px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`

export const CardAuthorOrDate = styled.p`
  color: var(--gray);
  letter-spacing: 0px;
  opacity: 0.6;
  margin-bottom: 0.8rem;
  display: inline-block;
  transition: var(--transition);

  @media screen and (min-width: 810px) {
    padding-right: 1rem;
    margin-bottom: 1.2rem;
  }

  @media screen and (min-width: 1300px) {
    font-size: 0.7rem;
  }
`

export const CardAuthorDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
  align-content: center;
  align-items: center;
  transition: var(--transition);

  ${CardAuthorOrDate}:hover {
    color: var(--font-color);
    opacity: 0.9;
  }

  @media screen and (min-width: 810px) {
    display: flex;
    justify-content: flex-start;
  }
`

export const CardTextContainer = styled.div`
  /* padding: 0 0.8rem; */

  @media screen and (min-width: 810px) {
    width: 80%;
    margin-right: 2rem;
  }
`
export const ContentContainerCards = styled.div`
  @media screen and (min-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
`
