import React from "react"
import {
  ExplanationComponentContainer,
  ExplanationComponentTitle,
  ExplanationComponentTextContainer,
  TextBold,
  TextParag,
  Anchor,
  Icon,
  Img,
} from "./ExplanationComponent.elements"
import { Line } from "../index"
import githubLogo from "../../assets/github.svg"

export const RepoExplanationComponent = () => {
  return (
    <ExplanationComponentContainer>
      <ExplanationComponentTitle>
        <Icon className="fas fa-hashtag"></Icon> Repo
      </ExplanationComponentTitle>
      <Line lineWidth="25%" primary marginBottom="2rem" marginTop="1rem" />
      <ExplanationComponentTextContainer>
        <TextParag propsMargin="1rem 0 0 0">
          You can download the code from the repository found on Github:
        </TextParag>
        <Anchor href="https://github.com/mrLuisFer/the-new-times">
          <Img src={githubLogo} alt="github-logo" pMargin="0 10px 0 0" />
          https://github.com/mrLuisFer/the-new-times
        </Anchor>
        <TextParag propsMargin="1rem 0 0 0">
          You just have to clone the repo with the command:
          <br />
          <TextBold>
            $ git clone https://github.com/mrLuisFer/the-new-times.git
          </TextBold>
        </TextParag>
        <TextParag propsMargin="1rem 0 0 0">
          Then just put in the terminal where you cloned the{" "}
          <TextBold>$ npm install</TextBold>
          repo to install the necessary dependencies
        </TextParag>
        <TextParag propsMargin="1rem 0 0 0">
          Or you can make a pull request to improve the code or add new
          functions or features
        </TextParag>
        <TextParag propsMargin="1rem 0 0 0">
          Then just run the <TextBold>$ npm start</TextBold>
          command to start the server on your localhost
        </TextParag>
      </ExplanationComponentTextContainer>
    </ExplanationComponentContainer>
  )
}
