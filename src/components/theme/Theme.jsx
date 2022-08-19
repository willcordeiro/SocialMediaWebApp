import React from "react";
import "./Theme.css";
import { HiOutlineXCircle } from "react-icons/hi";
import DarkModeToggle from "react-dark-mode-toggle";
import { useStateContext } from "../../context/ContextProvider";

function Theme({ CloseFunction }) {
  const { CheckedSwitch, themeToggler, isDarkMode } = useStateContext();

  function twoCalls() {
    themeToggler();
    CheckedSwitch();
  }

  return (
    <>
      <div className="backgroundnotifications">
        <i className="Xicon" onClick={CloseFunction}>
          <HiOutlineXCircle />
        </i>
        <br />
        <h5>Change theme</h5>
        <br />
        <DarkModeToggle onChange={twoCalls} checked={isDarkMode} />
      </div>
    </>
  );
}

export default Theme;
