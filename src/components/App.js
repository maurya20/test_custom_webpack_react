import React, { Component } from "react";

class App extends Component {
  options = ["One", "Two", "Three", "Four", "Five"];
  onOptionChangeHandler = (event) => {
    console.log("User Selected Value :::::- ", event.target.value);
  };
  constructor() {
    super();
    this.state = {
      stepArr: [],
    };
  }
  onStart = (e) => {
    //history.pushState("/start", 'test')
    history.pushState({ urlPath: "/start" }, "", "/start");
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Hello world! Test</h1>
        <h3>HTML select tag in React js</h3>

        <select onChange={this.onOptionChangeHandler}>
          <option>Please choose one option</option>
          {this.options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>

        <button onClick={(e) => this.onStart(e)}>Start</button>
      </div>
    );
  }
}

export default App;
