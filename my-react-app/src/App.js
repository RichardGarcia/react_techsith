import React, { Component } from 'react';
import './App.css';

function SayHello(props) {
  return <h1>Hello There {props.name}!</h1>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my-react-app</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <SayHello name={'Richard'}/>
      </div>
    );
  }
}

export default App;
