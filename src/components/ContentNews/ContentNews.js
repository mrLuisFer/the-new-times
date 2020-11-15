import React from 'react'
import {
	Content,
	ContentTitle,
	ContentTitleContainer,
} from './ContentNews.elements'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { TechNews, BitcoinNews, TemplateComponent } from '../index'
import { apiKey } from '../../utils'

export const ContentNews = React.memo(function ContentNews() {
	return (
		<Router>
			<Content>
				<ContentTitle titleMargin='0 0 1rem 0'>Today in...</ContentTitle>
				<ContentTitleContainer>
					<ContentTitle>
						<Link to='/'>Tech</Link>
					</ContentTitle>
					<ContentTitle>
						<Link to='/news/bitcoin'>Bitcoin</Link>
					</ContentTitle>
					<ContentTitle>
						<Link to='/news/google'>Google</Link>
					</ContentTitle>
					<ContentTitle>
						<Link to='/news/apple'>Apple</Link>
					</ContentTitle>
				</ContentTitleContainer>

				{/* Routes for diferents news */}
				<Switch>
					<Route exact path='/' component={TechNews}></Route>
					<Route exact path='/news/bitcoin' component={BitcoinNews}></Route>
					<Route exact path='/news/google'>
						<TemplateComponent
							url={`http://newsapi.org/v2/everything?q=google&from=2020-11-14&to=2020-11-14&sortBy=popularity&apiKey=${apiKey}`}
						/>
					</Route>
					<Route exact path='/news/apple'>
						<TemplateComponent
							url={`http://newsapi.org/v2/everything?q=apple&from=2020-11-14&to=2020-11-14&sortBy=popularity&apiKey=${apiKey}`}
						/>
					</Route>
				</Switch>
			</Content>
		</Router>
	)
})
