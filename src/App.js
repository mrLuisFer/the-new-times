import styled from 'styled-components'
import { NavBar, Wrapper, Footer } from './components'
import { HomePage } from './Views/index'

const AppTemplate = styled.div`
	padding: 1.5rem;
	@media screen and (min-width: 800px) {
		padding: 4rem;
		padding-bottom: 0;
	}
`

function App() {
	return (
		<AppTemplate>
			<NavBar />
			<Wrapper marginTop>
				<HomePage />
			</Wrapper>
			<Footer />
		</AppTemplate>
	)
}

export default App
