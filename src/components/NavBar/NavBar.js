import React from "react"
import { NavSection, NavTitle } from "./NavBar.elements.js"
import { Navigation } from "../index"

export const NavBar = () => {
  return (
    <>
      <NavSection>
        <i className="fas fa-bars"></i>
        <NavTitle>THE NEW TIMES</NavTitle>
        <i className="fas fa-search"></i>
      </NavSection>
      <Navigation />
    </>
  )
}
