import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Homepage/HomePage";
import {
  LightTheme,
  DarkTheme,
  GlobalStyles,
} from "./components/theme/data/theme";
import { ThemeProvider } from "styled-components";
import React from "react";
import { useStateContext } from "./context/ContextProvider";

function App() {
  const { theme } = useStateContext();

  return (
    <div>
      <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
        <GlobalStyles />
        <Navbar />
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
