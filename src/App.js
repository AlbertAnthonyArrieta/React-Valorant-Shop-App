import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <header 
      className="App-header" 
      style={darkMode ? {backgroundColor: '#ebedf0'} :
       {backgroundColor: '#18191a'}}>
        <h1 className={darkMode ? 'text-dark' : 'text-light'}>Hello World!</h1>
        <button 
        className={darkMode ? 'btn btn-dark' : 'btn btn-light'}
        onClick={() => setDarkMode(!darkMode)}
        >Dark mode!</button>
      </header>
    </div>
  );
}

export default App;
