import React, { Component } from "react";

import "./Editor.css";


const Editor =({textMarked}) => {
 
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
            onChange={textMarked}
            className="w-100"
            cols="10"
            rows="9"
            charswidth="23"
            name="text_body"
            id="editor"
            />
        </div>
      </div>
    
    </React.Fragment>
  );
};

export default Editor;
