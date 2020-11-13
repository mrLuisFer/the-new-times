import React from 'react'
import { useFetchingData } from '../../hooks/index'
import {
	NewsContainer,
	NewsAuthor,
	NewsCard,
	NewsContent,
	NewsFlex,
	NewsImg,
	NewsPublishedAt,
	NewsTitle,
	NewsWrapper,
} from './PrincipalGridNews.elements'

import { apiKey } from '../../utils'

export const PrincipalGridNews = () => {
	// Call to the api in a zise = 3
	const pageSize = 3
	const { apiData, loading } = useFetchingData(
		`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&pageSize=${pageSize}`
	)
	const articles = apiData?.articles

	console.log(articles)

	// Do more dynamic in other component
	return (
		<div>
			{loading || apiData === undefined ? (
				'Charging'
			) : (
				<NewsContainer>
					{articles?.map((article) => (
						<NewsCard
							key={
								article?.source.name === null || undefined
									? article?.title === article?.author
										? article?.content
										: article?.title
									: article?.description
							}
							pMargin='0'
						>
							<NewsImg
								src={
									article?.urlToImage === null || undefined
										? ' '
										: article?.urlToImage
								}
								alt={
									article?.source.name === null || undefined
										? article?.name
										: article?.source.name
								}
								noimg={
									article?.urlToImage === null || undefined
										? ''
										: article?.urlToImage
								}
							/>
							<NewsWrapper>
								<NewsTitle>
									{article?.title === null || undefined
										? article?.author
										: article?.title}
								</NewsTitle>
								<NewsContent mTop='.7rem'>
									{article?.content === null || undefined
										? article?.description
										: article?.content}
								</NewsContent>
								<NewsFlex mTop='1rem' justify='flex-end'>
									<NewsPublishedAt pMargin='0 10px 0 0'>
										{article?.publishedAt === null || undefined
											? ''
											: article?.publishedAt}
									</NewsPublishedAt>
									<NewsAuthor>
										-
										{article?.author === null || undefined
											? article?.source.name
											: article?.author}
									</NewsAuthor>
								</NewsFlex>
							</NewsWrapper>
						</NewsCard>
					))}
				</NewsContainer>
			)}
		</div>
	)
}
