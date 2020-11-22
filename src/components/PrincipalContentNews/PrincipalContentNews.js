import React, { useState } from "react"
import { apiKey } from "../../utils"
import { useFetchingData } from "../../hooks/index"

import {
  PrincipalContentContainer,
  PrincipalContentInput,
  PrincipalContentText,
} from "./PrincipalContentNews.elements"
import { TemplateComponent, Loading } from "../index"

export const PrincipalContentNews = React.memo(function PrincipalContentNews() {
  const [country, setCountry] = useState("us")
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
  const { apiData, loading } = useFetchingData(url)

  const news = apiData?.articles

  console.log(news)

  const handleCountry = (event) => {
    setCountry(event.target.value)
  }

  return (
    <>
      {loading || apiData === null ? (
        news === undefined ? (
          <p>Its undefined</p>
        ) : (
          <Loading />
        )
      ) : (
        <>
          <PrincipalContentContainer>
            <PrincipalContentText htmlFor="country-select">
              Choose a Lenguage:
            </PrincipalContentText>
            <PrincipalContentInput
              name="country-select"
              value={country}
              onChange={handleCountry}
            >
              <option defaultValue value="us">
                USA
              </option>
              <option value="mx">Mexico</option>
            </PrincipalContentInput>
          </PrincipalContentContainer>
          <TemplateComponent url={url} />
        </>
      )}
    </>
  )
})
