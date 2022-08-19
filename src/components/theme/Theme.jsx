import React from "react";
import "./Theme.css";
import { HiOutlineXCircle } from "react-icons/hi";
function Theme({ CloseFunction }) {
  return (
    <>
      <div className="backgroundnotifications">
        <i className="Xicon" onClick={CloseFunction}>
          <HiOutlineXCircle />
        </i>
        <br />
        <h5>Change theme</h5>
      </div>
    </>
  );
}

export default Theme;
