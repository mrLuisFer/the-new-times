import React from "react"
import { NavigationMenu } from "./Navigation.elements"
import { Line } from "../index"

export const Navigation = () => {
  return (
    <>
      <NavigationMenu>
        <a href="/">Contact Us</a>
        <a href="/">About</a>
        <a href="/">Repository</a>
      </NavigationMenu>
      <Line primary marginTop="2.5rem" />
    </>
  )
}
