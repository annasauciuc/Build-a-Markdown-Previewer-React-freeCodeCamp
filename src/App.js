import React, { Component } from "react";
import Editor from "./components/Editor/Editor";
import Markdown from "react-markdown";
import Previewer from "./components/Previewer/Previewer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  textMarkedHAndler(event) {
    this.setState({
      value: event.target.value
    });
    console.log("this.state.value :", this.state.value);
  }
  render() {
    const { value } = this.state;
    return (
      <div className="container  mb-5 ">
        {" "}
        <Editor
          textMarked={event => {
            this.textMarkedHAndler(event);
          }}
        />
        <div className="   col-xs-12 col-sm-12 col-md-12">
          <div className="previewWrap   preview">
            <div className="toolbar   w-100">
              <i className="pl-1 pr-2 fab fa-free-code-camp"> Previwer</i>
              <i className="fas fa-arrows-alt" />
            </div>
            <div id="preview">
              <Markdown source={value} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
