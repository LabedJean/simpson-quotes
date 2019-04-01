import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from "./Quotes";
import Lamp from "./Lamp";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true,
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
  render() {
    const currentlogoclassname = this.state.working ? 'App-logo' : 'App-logo-2'
    const currentlogo = this.state.working ? "http://assets.stickpng.com/thumbs/5a0c40a65a997e1c2cea116c.png" : "http://www.pngmart.com/files/8/Futurama-PNG-Free-Image.png"
    const currentworking = this.state.working ? "I work" : "No working !!"
    return (
      <div className="App">
       
        <header className="App-header">
          <img src={currentlogo} className={currentlogoclassname} alt="logo" />
          <h1>{currentworking}</h1>
          <button
          onClick={this.handleClick}
        >What does Homer do?
        </button>
        </header>
        <Lamp on />
        <Lamp />
        <Quotes />
      </div>
    );
  }
}

export default App;
