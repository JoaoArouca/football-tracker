import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { FootballContext } from './context/FootballContext'
import { useContext } from 'react'

export function App() {
  const { data } = useContext(FootballContext)
  // console.log(data)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <h1>hello world</h1>
    </ThemeProvider>
  )
}
