import React from 'react'
import { useFetchingData } from '../../hooks/index'
import { apiKey } from '../../utils'
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

export const BitcoinNews = React.memo(function BitcoinNews() {
	const { apiData, loading } = useFetchingData(
		`http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-15&sortBy=publishedAt&apiKey=${apiKey}`
	)

	const news = apiData?.articles

	console.log(news)

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
