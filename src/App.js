import React from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [work, setWork] = useState('good');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            We will create DForce app
           and will do that:
        </p>
        <button
         onClick = {()=>setWork(work=>work==='good'?'bad':'good')}
         style = {{height:'50px',width:'80px',background:'green'}} >
           {work}
        </button>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
