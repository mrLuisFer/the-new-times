import React from "react"
import {
  Content,
  ContentTitle,
  ContentTitleContainer,
} from "./ContentNews.elements"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { TemplateComponent } from "../index"
import { apiKey } from "../../utils"
import { PrincipalContentNews } from "../PrincipalContentNews/PrincipalContentNews"

export const ContentNews = React.memo(function ContentNews() {
  return (
    <Router>
      <Content>
        <ContentTitle titleMargin="0 0 1rem 0">Trending News:</ContentTitle>
        <ContentTitleContainer>
          <ContentTitle>
            <Link to="/">Today</Link>
          </ContentTitle>
          <ContentTitle>
            <Link to="/news/tech">Tech</Link>
          </ContentTitle>
          <ContentTitle>
            <Link to="/news/bitcoin">Bitcoin</Link>
          </ContentTitle>
          <ContentTitle>
            <Link to="/news/google">Google</Link>
          </ContentTitle>
          <ContentTitle>
            <Link to="/news/apple">Apple</Link>
          </ContentTitle>
        </ContentTitleContainer>

        {/* Routes for diferents news */}
        <Switch>
          <Route exact path="/">
            <PrincipalContentNews />
          </Route>
          <Route path="/news/tech">
            <TemplateComponent
              url={`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`}
            />
          </Route>
          <Route path="/news/bitcoin">
            <TemplateComponent
              url={`
https://newsapi.org/v2/everything?q=bitcoin&from=2020-10-20&sortBy=publishedAt&apiKey=${apiKey}`}
            />
          </Route>
          <Route path="/news/google">
            <TemplateComponent
              url={`https://newsapi.org/v2/everything?q=google&from=2020-11-14&to=2020-11-14&sortBy=popularity&apiKey=${apiKey}`}
            />
          </Route>
          <Route path="/news/apple">
            <TemplateComponent
              url={`https://newsapi.org/v2/everything?q=apple&from=2020-11-14&to=2020-11-14&sortBy=popularity&apiKey=${apiKey}`}
            />
          </Route>
        </Switch>
      </Content>
    </Router>
  )
})
