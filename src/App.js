import styled from "styled-components"
import { NavBar } from "./components"
import { HomePage } from "./Views/HomePage/HomePage"
import { Wrapper } from "./components"

const AppTemplate = styled.div`
  padding: 4rem;
  padding-bottom: 0;
`

function App() {
  return (
    <AppTemplate>
      <NavBar />
      <Wrapper marginTop>
        <HomePage />
      </Wrapper>
    </AppTemplate>
  )
}

export default App
