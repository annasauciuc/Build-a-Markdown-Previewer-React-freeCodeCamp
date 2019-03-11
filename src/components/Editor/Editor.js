import React, { Component } from "react";

import "./Editor.css";
import Markdown from "react-markdown";
class Editor extends Component {
  constructor(props) {
    super(props);
    this.button = this.button.bind(this);
    console.log("props", props);
    this.state = {
      value: ` # Welcome to my React Markdown Previewer!

      ## This is a sub-heading...
      ### And here's some other cool stuff:
        
     
      
    
        
      You can also make text **bold**... whoa!
      Or _italic_.
      Or... wait for it... **_both!_**
      And feel free to go crazy ~~crossing stuff out~~.
      
      There's also [links](https://www.freecodecamp.com), and
      > Block Quotes!
      
      And if you want to get really crazy, even tables:
      
      Wild Header | Crazy Header | Another Header?
      ------------ | ------------- | ------------- 
      Your content can | be here, and it | can be here....
      And here. | Okay. | I think we get it.
      
      - And of course there are lists.
        - Some are bulleted.
           - With different indentation levels.
              - That look like this.
      
      
      1. And there are numbererd lists too.
      1. Use just 1s if you want! 
      1. But the list goes on...
      - Even if you use dashes or asterisks.
      * And last but not least, let's not forget embedded images:
      
      ![React Logo w/ Text](https://goo.gl/Umyytc)
      [React Logo w/ Text](https://goo.gl/Umyytc)
    `,
      active: false,
      fromWhere: ""
    };
  }
  //   handleContainer() {
  //     const currentState = this.state.active;
  //     this.setState({ active: !currentState });

  // };
  onSearchChange(event) {
    this.setState({ value: event.target.value });
    //  this.props.textMarked(event.target.value);
  }
  containerSizeHandler() {
    var element = document.querySelector(".editorContainer");
    element.classList.toggle("maximized");
    var element1 = document.getElementById("maxEditor");
    element1.classList.toggle("fa-location-arrow");
    var element3 = document.getElementById("previewContainer");
    element3.classList.toggle("d-none");
    var element4 = document.getElementById("mainContainer");
    element4.classList.toggle("container");
    var element5 = document.getElementById("maxEditor");
    element5.classList.toggle("resizer");
  }
  containerSizeHandler2() {
    var element = document.getElementById("previewContainer");
    element.classList.toggle("container");
    var element1 = document.getElementById("maxPreviwer");
    element1.classList.toggle("fa-location-arrow");
    var element3 = document.querySelector(".editorContainer");
    element3.classList.toggle("d-none");
    var element4 = document.getElementById("mainContainer");
    element4.classList.toggle("container");
    var element5 = document.getElementById("maxPreviwer");
    element5.classList.toggle("resizer");
  }
  button(value) {
    this.setState({ fromWhere: value });
    console.log("this.value", this.state.fromWhere);
  }
  renderButton(action, style) {
    return <i onClick={() => this.button(action)} className={style} />;
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
  renderPreviwer() {
    const { value, fromWhere } = this.state;
    // if (fromWhere == "maxEditor") {
    //   return;
    // }

    return (
      <div id="previewContainer" className="   col-xs-12 col-sm-12 col-md-12">
        <div className="previewWrap   preview">
          <div className="toolbar   w-100">
            <i className="pl-1 pr-2 fab fa-free-code-camp"> Previwer</i>
            {fromWhere == ""
              ? this.renderButton("maxPreviwer", "fas fa-arrows-alt")
              : this.renderButton("", "fas fa-location-arrow")}
          </div>
          <div className=" mr-1" id="preview">
            <Markdown source={value} />
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { value, fromWhere } = this.state;
    if (fromWhere == "maxEditor") {
      return this.renderEditor();
    } else if (fromWhere == "maxPreviwer") {
      return this.renderPreviwer();
    } else {
      return (
        <React.Fragment>
          {this.renderEditor()}
          {this.renderPreviwer()}
        </React.Fragment>
      );
    }

    // return (
    //   fromWhere == "maxEditor" ?  this.renderPreviwer():  fromWhere == "maxPreviwer"? this.renderPreviwer():
    //   <React.Fragment>

    //     {this.renderEditor()}
    //     {this.renderPreviwer()}
    //   </React.Fragment>
    // );
  }
}

export default Editor;
