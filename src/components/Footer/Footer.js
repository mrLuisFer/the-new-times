import React from "react"
import { Line } from "../index"
import {
  FooterContainer,
  FooterLink,
  FooterLinkContainer,
} from "./Footer.elements"

export const Footer = () => {
  return (
    <FooterContainer>
      <h2>Social Media: </h2>
      <Line marginTop="1rem" lineWidth="50%" />
      <FooterLinkContainer>
        <FooterLink
          href="https://www.facebook.com/people/Luis-Fer-Alvarez/100013068189807"
          target="_blank"
        >
          <span>Facebook: </span>
          <i className="fab fa-facebook"></i>
        </FooterLink>
        <FooterLink href="https://twitter.com/lolesuncrak" target="_blank">
          <span>Twitter: </span>
          <i className="fab fa-twitter"></i>
        </FooterLink>
        <FooterLink href="https://github.com/mrLuisFer" target="_blank">
          <span>Github: </span>
          <i className="fab fa-github"></i>
        </FooterLink>
        <FooterLink
          href="https://www.linkedin.com/in/luis-fernando-alvarez/"
          target="_blank"
        >
          <span>LinkedIn: </span>
          <i className="fab fa-linkedin"></i>
        </FooterLink>
      </FooterLinkContainer>
    </FooterContainer>
  )
}
