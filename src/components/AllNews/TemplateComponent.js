import React from 'react'
import { useFetchingData } from '../../hooks/index'
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

export const TemplateComponent = ({ url }) => {
	const { apiData, loading } = useFetchingData(url)

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
}
