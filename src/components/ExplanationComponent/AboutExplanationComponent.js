import React from "react"
import { Line } from "../globalStyledComponents"
import {
  ExplanationComponentContainer,
  ExplanationComponentTitle,
  ExplanationComponentTextContainer,
  TextParag,
  Icon,
} from "./ExplanationComponent.elements"

export const AboutExplanationComponent = () => {
  return (
    <ExplanationComponentContainer>
      <ExplanationComponentTitle>
        <Icon className="fas fa-hashtag"></Icon> About
      </ExplanationComponentTitle>
      <Line lineWidth="25%" primary marginBottom="2rem" marginTop="1rem" />
      <ExplanationComponentTextContainer>
        <TextParag>
          This project was made inspired by a design on Behance
        </TextParag>
        <br />
        <TextParag>
          It was built with react and styled components for component design and
          calls to the News API
        </TextParag>
      </ExplanationComponentTextContainer>
    </ExplanationComponentContainer>
  )
}
