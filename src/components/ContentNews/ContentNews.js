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
	ContentContainerCards,
} from './ContentNews.elements'
import { apiKey } from '../../utils'

export const ContentNews = React.memo(function ContentNews() {
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
					<ContentTitle>Today in Tech:</ContentTitle>
					<ContentContainerCards>
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
								<CardImg src={article?.urlToImage} alt={article?.title} />
							</CardNews>
						))}
					</ContentContainerCards>
				</Content>
			)}
		</>
	)
})
