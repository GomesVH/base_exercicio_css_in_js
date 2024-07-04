import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { theme, GlobalStyle, Div } from './styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Div>
        <ListaVagas />
      </Div>
    </ThemeProvider>
  )
}

export default App