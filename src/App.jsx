import './App.css'
import Header from "./components/Header.jsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Cv from "./pages/Cv.jsx";
import MyCarousels from "./carousel/MyCarousels.jsx";
import PageContainer from "./container/PageContainer.jsx";
import MyTypeWriters from "./typeWriters/MyTypeWriters.jsx";

const theme = createTheme({
    palette: {
        primary: { main: "#FF6500", contrastText: "#000000" },
        secondary: { main: "#0B192C", contrastText: "#fff" }
    }
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Header/>
          <PageContainer className="content">
              <Home/>
              <MyCarousels/>
              <Contact/>
              <Cv/>
          </PageContainer>
          <MyTypeWriters/>
      </ThemeProvider>

  )
}

export default App
