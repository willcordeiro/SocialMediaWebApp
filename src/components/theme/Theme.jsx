import React, { useState } from "react";
import "./Theme.css";
import { HiOutlineXCircle } from "react-icons/hi";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme, GlobalStyles } from "./data/theme";

function Theme({ CloseFunction }) {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
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
          <button onClick={themeToggler} type="button">
            here
          </button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Theme;
