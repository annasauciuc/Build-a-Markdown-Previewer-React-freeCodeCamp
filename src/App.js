import React, { Component } from "react";
import Editor from "./components/Editor/Editor";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  //  this.handleContainer= this.handleContainer.bind(this);
    this.state = {
      value: "",
      active: false
    };
  }
//   handleContainer() {
//     const currentState = this.state.active;
//     this.setState({ active: !currentState });

// };

  render() {
    return (
      <div    className="container  mb-5 " id="mainContainer" >
        {" "}
        <Editor />
      </div>
    );
  }
}

export default App;
