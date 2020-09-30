import React from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [work, setWork] = useState('good');
  const onClick = setWork({work:"bad"});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            We will create DForce app
          <button onClick = {onClick}>{work}</button> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
