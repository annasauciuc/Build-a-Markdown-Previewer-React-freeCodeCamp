import React, { Component } from "react";
import Editor from "./components/Editor/Editor";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container  mb-5 ">
        {" "}
        <Editor />{" "}
      </div>
    );
  }
}

export default App;
