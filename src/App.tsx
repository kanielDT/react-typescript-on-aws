import React from 'react';
import Hello from "./components/Hello"
import Form from "./components/Form"
import './App.css';

function App() {

  const [serverData, setServerData] = React.useState([])

  React.useEffect(() => {
    fetch("http://44.202.217.194:4000")
      .then(res => res.json())
      .then(data => setServerData(data))
      .catch(err => console.error(err))
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <Hello firstName="Kaniel" lastName="Tapper" age={24} />
        <Form />
        {/* @ts-ignore */}
        {serverData && serverData.map(eachDog => <p>{eachDog.name} - {eachDog.age}</p>)}
      </header>
    </div>
  );
}

export default App;
