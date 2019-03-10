import React, { Component } from "react";

import "./Previwer.css";
import reactIcon from "./../images/reactIcon.png";

class Previwer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="   col-xs-12 col-sm-12 col-md-12">
          <div className="previewWrap   preview">
            <div className="toolbar   w-100">
              <i className="pl-1 pr-2 fab fa-free-code-camp"> Previwer</i>
              <i class="fas fa-arrows-alt" />
            </div>
            <div id="preview" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Previwer;
