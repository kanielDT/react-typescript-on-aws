import React from 'react';
import Hello from "./components/Hello"
import Form from "./components/Form"
import './App.css';

function App() {




  return (
    <div className="App">
      <header className="App-header">
        <Hello firstName="Kaniel" lastName="Tapper" age={24} />
      </header>
    </div>
  );
}

export default App;
