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
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export const ContentNews = React.memo(function ContentNews() {
	const { apiData, loading } = useFetchingData(
		` http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
	)

	console.log(apiData)

	const news = apiData?.articles

	// render the news in the page like a category
	return (
		<Router>
			{loading || apiData === undefined || null ? (
				<p>Charging</p>
			) : (
				<Content>
					<ContentTitle>
						<Link to='/content/tech-news'>Today in Tech:</Link>
					</ContentTitle>
					<ContentTitle>
						<Link to='/content/bitcoin-news'>Bitcoin News</Link>
					</ContentTitle>
					<Switch>
						<Route exact path='/content/tech-news'>
							<ContentContainerCards>
								{news?.map((article) => (
									<CardNews key={article?.title}>
										<CardTextContainer>
											<CardTitle>{article?.title}</CardTitle>
											<CardContent>{article?.content}</CardContent>
											<CardAuthorDateContainer>
												<CardAuthorOrDate>{article?.author}</CardAuthorOrDate>
												<CardAuthorOrDate>
													{article?.publishedAt}
												</CardAuthorOrDate>
											</CardAuthorDateContainer>
										</CardTextContainer>
										<CardImg src={article?.urlToImage} alt={article?.title} />
									</CardNews>
								))}
							</ContentContainerCards>
						</Route>
						<Route exact path='/content/bitcoin-news'>
							<p>Here is other component</p>
						</Route>
					</Switch>
				</Content>
			)}
		</Router>
	)
})
