import React from 'react'
import {
	CardNews,
	CardImg,
	CardTitle,
	CardContent,
	CardAuthorOrDate,
	CardAuthorDateContainer,
	CardTextContainer,
	ContentContainerCards,
} from '../globalStyledComponents/NewsTemplate'
import { useFetchingData } from '../../hooks/index'
import { apiKey } from '../../utils'

export const TechNews = React.memo(function TechNews() {
	const { apiData, loading } = useFetchingData(
		`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
	)

	const news = apiData?.articles

	return (
		<>
			{loading || apiData === undefined || null ? (
				<p>Charging</p>
			) : (
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
			)}
		</>
	)
})
