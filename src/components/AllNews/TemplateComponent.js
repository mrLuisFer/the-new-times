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

	return (
		<>
			{loading || apiData === undefined || null ? (
				<p>Charging</p>
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
										? 'https://lh3.googleusercontent.com/proxy/CXnQbtl98AepHT8CPGFGiF4dFEvW7BK1tW62wFI9hTUxI_jBOIDo7c11SBTL4YzjiSQIdprzOMdfVa5Lbuuva73EInF0dT2XA50cZktS3llyRA'
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
