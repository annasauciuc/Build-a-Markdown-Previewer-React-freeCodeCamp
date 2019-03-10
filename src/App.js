import React, { Component } from "react";
import Editor from "./components/Editor/Editor";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div className="container  mb-5 ">
        {" "}
        <Editor />
      </div>
    );
  }
}

export default App;
