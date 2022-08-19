import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const CheckedSwitch = () =>
    isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  const getThemeInStorage = localStorage.getItem("themeSocial");

  const setLocalStorageTheme = () => {
    localStorage.setItem("themeSocial", theme);
  };

  setLocalStorageTheme();

  useEffect(() => {
    setTheme(getThemeInStorage);
  }, []);

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
