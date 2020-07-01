import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">The counter is {this.state.counter}</h1>
        <button
          data-test="increment-button"
          onClick={() =>
            this.setState((state) => ({ ...state, counter: state.counter + 1 }))
          }
        >
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={() =>
            this.setState((state) => ({
              ...state,
              counter: state.counter === 0 ? 0 : state.counter - 1,
            }))
          }
        >
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
