import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RouterConfig from "./config/RouterConfig.jsx";

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
          <RouterConfig/>
      </ThemeProvider>

  )
}

export default App
