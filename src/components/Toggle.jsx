import React from "react";
import "../styles/Toggle.css";

export default function ThemeToggle({ isEnabled, toggleState }) {
  return (
    <div className="dark-light-container">
      <h1 className="h1-logo-light-navbar">Light</h1>

      <label
        className={`toggle-wrapper ${isEnabled ? "active" : ""}`}
        htmlFor="toggle"
      >
        <div
          className={`toggle ${isEnabled ? "enabled" : "disabled"}`}
          onClick={toggleState}
        >
          <span className="hidden">{isEnabled ? "Enable" : "Disable"}</span>
          <input
            id="toggle"
            name="toggle"
            type="checkbox"
            checked={isEnabled}
            onChange={toggleState}
          />
        </div>
      </label>
      <h1 className="h1-logo-navbar"> Dark </h1>
    </div>
  );
}
