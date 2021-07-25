import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import InputComponent from "./componts/inputComponent";
import OutputComponant from "./componts/outputComponent";
import NavBar from "./componts/navBar";

class App extends Component {
  state = {
    input: {},
    message: {},
  };
  handleSubmit = () => {
    this.setState({
      input: this.state.input,
      message: this.state.input,
    });
  };

  handleChange = (event) => {
    this.setState({
      input: Object.assign(this.state.input, {
        [event.target.name]: [event.target.value],
      }),
      messages: this.state.messages,
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="containar">
          <InputComponent
            onInput={this.handleChange}
            inputValue={this.state.input}
            onSubmit={this.handleSubmit}
          />
          <div className="output">
            <OutputComponant outputValue={this.state.message} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
