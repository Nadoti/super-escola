import { GlobalStyles } from "./styles/global"
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/Router'
import { defaultTheme } from './styles/themes/default'
import { ContextData } from "./context/Context"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ContextData>
          <Router />
          <ToastContainer />
        </ContextData>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
