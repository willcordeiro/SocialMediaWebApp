import React from "react";
import "./Theme.css";
function Theme() {
  return (
    <>
      <div className="customize-theme">
        <div className="card">
          <h2>Customize Your View</h2>
          <p>Manage Your Theme</p>
          <div className="background">
            <h4>background</h4>
            <div className="choose-bg">
              <div className="bg-1">
                <span></span>
                <h5 forHtml="bg-1">Light</h5>
              </div>
              <div className="bg-2">
                <span></span>
                <h5>Dim</h5>
              </div>
              <div className="bg-3">
                <span></span> <h5 forHtml="bg-3">Lights Out</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Theme;
