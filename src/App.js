import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>add some nice text</div>
        <button>Second Best EVER</button>
        <span>hi blake, how are you?</span>
        <span>
          this is some of that new new that should hopefully trigger a release
          remotely
        </span>
        <span>this is just for emoji</span>
        <span>lets trigger a major release</span>
        <span>damn you breaking change</span>
      </header>
    </div>
  );
}

export default App;
