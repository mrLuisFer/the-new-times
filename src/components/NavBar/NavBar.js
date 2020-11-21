import React from "react"
import { NavSection, NavTitle } from "./NavBar.elements.js"
import { Navigation, Line } from "../index"
import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <>
      <NavSection>
        <NavTitle>
          <i className="fas fa-clock"></i>
          <Link to="/">THE NEW TIMES</Link>
        </NavTitle>
        <Navigation />
      </NavSection>
      <Line primary marginTop="2.5rem" />
    </>
  )
}
