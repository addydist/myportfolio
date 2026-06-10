import React from "react";
import "./TerminalWindow.css";

function TerminalWindow({ title, children, className = "" }) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        {title && <div className="terminal-title">{title}</div>}
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}

export default TerminalWindow;
