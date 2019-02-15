import React, { Component } from 'react';

// Components
import Fizz from "./components/Fizz";
import Buzz from "./components/Buzz";
import FizzBuzz from "./components/FizzBuzz";
import Hoc from "./components/Hoc";

// Assets
import logo from './logo.svg';

// Styles
import './App.css';


class App extends Component {
  state = {
    inputValue: '',
    number: ''
  }

  // Component Functions
  _renderFizzBuzz = () => {
    const { number } = this.state;
    const arr = [];

    if (!number) return null;

    for (let i = 0; i <= parseInt(number); i++) {
      arr.push(Hoc(i)(Fizz, Buzz, FizzBuzz));
    }

    return arr.map((Item, index) => <Item key={index} />);
  }
  
  render() {
    const { inputValue } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
        <div className="form">
          <span>Limit : </span>
          <input type="number" value={inputValue} onChange={e => this.setState({ inputValue: e.target.value ? parseInt(e.target.value) : '' })}></input>
          <button onClick={() => this.setState({ number: inputValue})}>Submit</button>
          <div className="content">
            {this._renderFizzBuzz()}
          </div>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
