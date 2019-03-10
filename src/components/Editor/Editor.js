import React, { Component } from "react";

import "./Editor.css";
import Markdown from "react-markdown";
class Editor extends Component {
  constructor(props) {
    super(props);
console.log('props', props)
    this.state = {
      value: `# Welcome to my React Markdown Previewer!

    ## This is a sub-heading...
    ### And here's some other cool stuff:
      
    Heres some code, <div></div>, between 2 backticks.
    
  
    // this is multi-line code:
    
    function anotherExample(firstLine, lastLine) {
      if (firstLine == '' && lastLine == '') {
        return multiLineCode;
      }
    }
 
      
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
    - Even if you use drtyyyyyyyyyerashes or asterisks.
    * And last but not least, let's not forget embedded images:
    
    ![React Logo w/ Text](https://goo.gl/Umyytc)
    `
    };
  }

  onSearchChange(event) {
    
    this.setState({ value: event.target.value });
  //  this.props.textMarked(event.target.value);
  }

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <div className="mx-auto    col-xs-8 col-sm-8 col-md-8">
          <div className="form-group">
            <div className="toolbar editorWrap mt-5 ">
              <i className=" pl-1 pr-2 fab fa-free-code-camp" />
              Editor
              <i className="fas fa-arrows-alt" />
            </div>
            <textarea
         
              onChange={(event)=>this.onSearchChange(event)}
              className="w-100"
              cols="10"
              rows="10"
              charswidth="23"
              name="text_body"
              id="editor"
              value={value}
            />
          </div>
        </div>
        <div className="   col-xs-12 col-sm-12 col-md-12">
          <div className="previewWrap   preview">
            <div className="toolbar   w-100">
              <i className="pl-1 pr-2 fab fa-free-code-camp"> Previwer</i>
              <i className="fas fa-arrows-alt" />
            </div>
            <div className="ml-3 mr-1" id="preview">
              <Markdown source={value} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Editor;
