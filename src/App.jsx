import './App.css'
import Header from "./components/Header.jsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import MyCarousels from "./carousel/MyCarousels.jsx";
import PageContainer from "./container/PageContainer.jsx";
import AboutMe from "./components/AboutMe.jsx";


const theme = createTheme({
    palette: {
        primary: { main: "#FF6500", contrastText: "#ffffff" },
        secondary: { main: "#0B192C", contrastText: "#fff" },
    },
    typography: {
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
});

function App() {
  return (
          <ThemeProvider theme={theme}>
              <Header/>
              <Home/>
              <PageContainer className="content">
                  <AboutMe/>
                  <MyCarousels/>
                  <Contact/>
              </PageContainer>
          </ThemeProvider>


  )
}

export default App
