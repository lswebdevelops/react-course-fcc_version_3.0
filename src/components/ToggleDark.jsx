import React from "react";
import "../styles/ToggleDark.css";

export default function ThemeToggle() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  React.useEffect(() => {
    
  }, [isEnabled]);
  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
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
  );
}
