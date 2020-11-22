import React from "react"
import { NavigationMenu } from "./Navigation.elements"
import { Link } from "react-router-dom"

export const Navigation = () => {
  return (
    <>
      <NavigationMenu>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </NavigationMenu>
    </>
  )
}
