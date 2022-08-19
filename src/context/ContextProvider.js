import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const CheckedSwitch = () =>
    isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

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
