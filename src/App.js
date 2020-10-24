//Modules
import React from 'react';
import {useSelector} from 'react-redux'

//Style
import {GlobalStyle} from './global/style'
import {ThemeProvider} from 'styled-components'
import theme from './global/theme'

//Components
import Home from './pages/home'

const App = () =>{

  const selectedTheme = useSelector(state => state.theme)

  return(
    <ThemeProvider theme={theme[selectedTheme]}>
        <Home />
        <GlobalStyle />
    </ThemeProvider>    
  )
}

export default App;
