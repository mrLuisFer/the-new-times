import React from "react"
import { useFetchingData } from "../../hooks/FetchingData/useFetchingData"
import { GridContainer } from "./PrincipalGridNews.elements"

export const PrincipalGridNews = () => {
  const { apiData, loading } = useFetchingData(3)
  const articles = apiData?.articles

  console.log(articles)

  return (
    <div>
      {loading ? (
        "Charging"
      ) : (
        <GridContainer>
          {articles?.map((article) => (
            <div key={article?.source.name}>
              <p>{article?.source.name}</p>
            </div>
          ))}
        </GridContainer>
      )}
    </div>
  )
}
