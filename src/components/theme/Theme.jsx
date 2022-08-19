import React, { useState } from "react";
import "./Theme.css";
import { HiOutlineXCircle } from "react-icons/hi";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme, GlobalStyles } from "./data/theme";
import DarkModeToggle from "react-dark-mode-toggle";

function Theme({ CloseFunction }) {
  const [theme, setTheme] = useState("light");

  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const CheckedSwitch = () =>
    isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  function twoCalls() {
    themeToggler();
    CheckedSwitch();
  }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <GlobalStyles />
        <div className="backgroundnotifications">
          <i className="Xicon" onClick={CloseFunction}>
            <HiOutlineXCircle />
          </i>
          <br />
          <h5>Change theme</h5>
          <br />
          <DarkModeToggle onChange={twoCalls} checked={isDarkMode} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default Theme;
