import React from 'react'
import { useFetchingData } from '../../hooks/index'
import {
	Content,
	CardNews,
	ContentTitle,
	CardImg,
	CardTitle,
	CardContent,
	CardAuthorOrDate,
	CardAuthorDateContainer,
	CardTextContainer,
} from './ContentNews.elements'
import { apiKey } from '../../utils'

export const ContentNews = () => {
	const { apiData, loading } = useFetchingData(
		` http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
	)

	console.log(apiData)

	const news = apiData?.articles

	// render the news in the page like a category
	return (
		<>
			{loading || apiData === undefined || null ? (
				<p>Charging</p>
			) : (
				<Content>
					<ContentTitle>Today</ContentTitle>
					{news?.map((article) => (
						<CardNews key={article?.title}>
							<CardTextContainer>
								<CardTitle>{article?.title}</CardTitle>
								<CardContent>{article?.content}</CardContent>
								<CardAuthorDateContainer>
									<CardAuthorOrDate>{article?.author}</CardAuthorOrDate>
									<CardAuthorOrDate>{article?.publishedAt}</CardAuthorOrDate>
								</CardAuthorDateContainer>
							</CardTextContainer>
							<div>
								<CardImg src={article?.urlToImage} alt={article?.title} />
							</div>
						</CardNews>
					))}
				</Content>
			)}
		</>
	)
}
