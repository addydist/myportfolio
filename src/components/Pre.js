import React from "react";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="boot-text">
        <span className="terminal-prompt">$</span> booting portfolio.exe
        <span className="boot-cursor"></span>
      </div>
    </div>
  );
}

export default Pre;
