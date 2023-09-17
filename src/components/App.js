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
  componentDidMount() {
    window.onbeforeunload = function (e) {
      e && e.preventDefault();
      return "";
    };
  }
  onStart = (e) => {
    //history.pushState("/start", 'test')
    history.pushState({ urlPath: "/start" }, "", "/start");
    printArray([1, 2, 3, 4, 5, 6, 7, 77, 8, 8, 8, 8888]);
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
