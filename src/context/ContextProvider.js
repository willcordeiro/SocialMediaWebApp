import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const CheckedSwitch = () =>
    isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  if (isDarkMode) {
    const setThemeInStorage = (theme) => {
      localStorage.setItem("themeSocial", theme);
    };
    setThemeInStorage(theme);
  }

  useEffect(() => {
    var getThemeInStorage = localStorage.getItem("themeSocial");
    setTheme(getThemeInStorage);
  });

  return (
    <StateContext.Provider
      value={{
        CheckedSwitch,
        themeToggler,
        theme,
        isDarkMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
