import React from "react"
import spinnerLoader from "../../assets/spinner.svg"

export const Loading = () => {
  return (
    <div>
      <img src={spinnerLoader} alt="spinner-loader" />
    </div>
  )
}
