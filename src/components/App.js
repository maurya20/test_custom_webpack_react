import React, { Component } from "react";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

class App extends Component {
  options = ["One", "Two", "Three", "Four", "Five"];
  onOptionChangeHandler = (event) => {
    console.log("User Selected Value :::::- ", event.target.value);
  };
  constructor() {
    super();
    this.state = {
      stepArr: [],
      currentComponent: "home",
    };
  }
  componentDidMount() {
    // window.onbeforeunload = function (e) {
    //   e && e.preventDefault();
    //   setTimeout(() => {
    //     window.onbeforeunload = function () {
    //       return "";
    //     };
    //     console.log("user stays?????");
    //   }, 500);
    //   return "";
    // };
  }
  onStart = (e) => {
    //history.pushState("/start", 'test')
    history.pushState({ urlPath: "/start" }, "", "/start");
    printArray([1, 2, 3, 4, 5, 6, 7, 77, 8, 8, 8, 8888]);
  };
  toggleHome = () => {
    if (this.state.currentComponent == "home") {
      this.setState({ currentComponent: "about" });
    } else {
      this.setState({ currentComponent: "home" });
    }
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
        <button onClick={this.toggleHome}>Toggler</button>
        {this.state.currentComponent == "about" ? <About /> : <Home />}
      </div>
    );
  }
}

export default App;
