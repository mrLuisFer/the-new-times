// import React from "react"

export const FetchingData = () => {
  const apiKey = process.env.REACT_APP_API_KEY
  const url = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`

  console.log(url)
}
