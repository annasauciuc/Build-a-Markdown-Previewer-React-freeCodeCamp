import React, { Component } from "react";

import Markdown from "react-markdown";
import "./Previewer.css";
class Previewer extends Component {
  constructor(props) {
    super(props);
    this.renderPreviewer = this.renderPreviewer.bind(this);
    this.containerLocation = this.containerLocation.bind(this);
    this.renderButton = this.renderButton.bind(this);
    
  }

  containerLocation(containerId) {
    this.setState({ fromWhere: containerId });
    this.updateFromWhere(containerId);
  }
  updateFromWhere(fromWhere) {
    this.props.updateFromWhere(fromWhere);
  }
  renderButton(containerId, style) {
    console.log("renderButtonPrev??");
    return (
      <i
        onClick={() => this.containerLocation(containerId)}
        className={style}
      />
    );
  }
  renderPreviewer() {
    const { value, fromWhere } = this.props;
    console.log("fromWherePreviewer", fromWhere);
    return (
      <div id="previewContainer" className="col-xs-12 col-sm-12 col-md-12">
        <div className="previewWrap preview">
          <div className="toolbar w-100">
            <i className="pl-1 pr-2 fab fa-free-code-camp"> Previewer</i>
            {fromWhere == ""
              ? this.renderButton("maxPreviewer", "fas fa-arrows-alt")
              : this.renderButton("", "fas fa-location-arrow resizer")}
          </div>
          <div className="ml-1 mr-1" id="preview">
            <Markdown source={value} />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.renderPreviewer();
  }
}

export default Previewer;
