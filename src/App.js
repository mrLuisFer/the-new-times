import styled from 'styled-components'
import { NavBar, Wrapper, Footer } from './components'
import { HomePage, About, Repo, Contact } from './Views/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const AppTemplate = styled.div`
	min-height: 100vh;
	padding: 1.5rem;
	@media screen and (min-width: 800px) {
		padding: 4rem;
		padding-bottom: 0;
	}
`

function App() {
	return (
		<Router>
			<AppTemplate>
				<NavBar />
				<Wrapper marginTop>
					<Switch>
						<Route exact path='/'>
							<HomePage />
						</Route>
						<Route path='/contact'>
							<Contact />
						</Route>
						<Router path='/about'>
							<About />
						</Router>
						<Router path='/repo'>
							<Repo />
						</Router>
					</Switch>
				</Wrapper>
			</AppTemplate>
			<Footer />
		</Router>
	)
}

export default App
