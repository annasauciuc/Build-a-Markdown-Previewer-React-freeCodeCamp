import React, { Component } from "react";

import "./Editor.css";
import Markdown from "react-markdown";
import initialMD from "./initialText.md";
class Editor extends Component {
  constructor(props) {
    super(props);
    this.containerLocation = this.containerLocation.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.renderEditor = this.renderEditor.bind(this);
    this.renderPreviewer = this.renderPreviewer.bind(this);
    this.state = {
      active: false,
      fromWhere: ""
    };
  }
  componentDidMount = () => {
    fetch(initialMD)
      .then(response => response.text())
      .then(text => {
        this.setState({
          value: text
        });
      });
  };
  onSearchChange(event) {
    this.setState({ value: event.target.value });
  }

  containerLocation(value) {
    this.setState({ fromWhere: value });
  }
  renderButton(action, style) {
    return (
      <i onClick={() => this.containerLocation(action)} className={style} />
    );
  }
  renderEditor() {
    const { value, fromWhere } = this.state;
    // if (fromWhere == "maxPreviwer") {
    //   return;
    // }
    return (
      <div className=" mx-auto col-xs-8 col-sm-8 col-md-8">
        <div className="form-group">
          <div className="toolbar editorWrap mt-5 ">
            <i className=" pl-1 pr-2 fab fa-free-code-camp" />
            Editor
            {fromWhere == ""
              ? this.renderButton("maxEditor", "fas fa-arrows-alt")
              : this.renderButton("", "fas fa-location-arrow")}
          </div>
          <textarea
            onChange={event => this.onSearchChange(event)}
            className="w-100 h-100 editorContainer"
            charswidth="23"
            name="text_body"
            id="editor"
            value={value}
          />
        </div>
      </div>
    );
  }
  renderPreviewer() {
    const { value, fromWhere } = this.state;
    return (
      <div id="previewContainer" className="   col-xs-12 col-sm-12 col-md-12">
        <div className="previewWrap   preview">
          <div className="toolbar   w-100">
            <i className="pl-1 pr-2 fab fa-free-code-camp"> Previewer</i>
            {fromWhere == ""
              ? this.renderButton("maxPreviewer", "fas fa-arrows-alt")
              : this.renderButton("", "fas fa-location-arrow")}
          </div>
          <div className=" ml-1" id="preview">
            <Markdown source={value} />
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { fromWhere } = this.state;
    if (fromWhere == "maxEditor") {
      return this.renderEditor();
    } else if (fromWhere == "maxPreviewer") {
      return this.renderPreviewer();
    } else {
      return (
        <React.Fragment>
          {this.renderEditor()}
          {this.renderPreviewer()}
        </React.Fragment>
      );
    }
  }
}

export default Editor;
