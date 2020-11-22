import React from "react"
import { useFetchingData } from "../../hooks/index"
import {
  CardNews,
  CardImg,
  CardTitle,
  CardContent,
  CardAuthorOrDate,
  CardAuthorDateContainer,
  CardTextContainer,
  ContentContainerCards,
} from "../globalStyledComponents/NewsTemplate"
import newsPaper from "../../assets/news_paper.png"
import { Loading } from "../index"

export const TemplateComponent = ({ url }) => {
  const { apiData, loading } = useFetchingData(url)

  const news = apiData?.articles

  return (
    <>
      {loading || apiData === undefined || null ? (
        <Loading />
      ) : (
        <ContentContainerCards>
          {news?.map((article) => (
            <CardNews
              key={
                article?.content === null || undefined
                  ? article?.title === null || undefined
                    ? article?.url
                    : article?.title
                  : article?.content === null || undefined
                  ? article?.url
                  : article?.content
              }
            >
              <CardTextContainer>
                <CardTitle>{article?.title}</CardTitle>
                <CardContent>{article?.content}</CardContent>
                <CardAuthorDateContainer>
                  <CardAuthorOrDate>{article?.author}</CardAuthorOrDate>
                  <CardAuthorOrDate>{article?.publishedAt}</CardAuthorOrDate>
                </CardAuthorDateContainer>
              </CardTextContainer>
              <CardImg
                src={
                  article?.urlToImage === null || undefined
                    ? `${newsPaper}`
                    : article?.urlToImage
                }
                alt={article?.title}
              />
            </CardNews>
          ))}
        </ContentContainerCards>
      )}
    </>
  )
}
