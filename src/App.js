import React from "react";
import './App.css';
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={`App ${darkMode ? 'App-dark' : 'App-light'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
