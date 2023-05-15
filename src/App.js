import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import ThemeToggle from './components/Toggle'; // Corrected import statement

function App() {
  const [toggleEnabled, setToggleEnabled] = React.useState(false);

  function handleToggle() {
    setToggleEnabled((prevState) => !prevState);
  }

  return (
    <div className={`App ${toggleEnabled ? 'dark': 'light'}`}>
      <div className='navbar-toggle'>
      < Navbar />
      <ThemeToggle isEnabled={toggleEnabled} toggleState={handleToggle} />

      </div>
      
      <Main />
    </div>
  );
}

export default App;
