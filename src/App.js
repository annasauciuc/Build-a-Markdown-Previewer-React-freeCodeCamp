// import React, { Component } from "react";
// import Editor from "./components/Editor/Editor";
// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "",
//       active: false
//     };
//   }
//   render() {
//     return (
//       <div    className="container   mb-5 " id="quote-box" >
//         {" "}
//         <Editor />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import Editor from "./components/Editor/Editor";

import initialMD from "./initialText.md";
import Previewer from "./components/Previewer/Previewer";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.onTextChange = this.onTextChange.bind(this);
    this.state = {
      value: "",
      active: false,
      fromWhere: ""
    };
  }
  onTextChange(event) {
    this.setState({ value: event.target.value });
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

  updateFromWhere(fromWhere){
    this.setState({ fromWhere:fromWhere });
  }

  render() {
    const { value, fromWhere } = this.state;
    console.log("fromWhereContainer", fromWhere);
    if (fromWhere == "maxEditor") {
      return (
        <Editor
          onTextChange={event => this.onTextChange(event)}
          value={value}
          fromWhere={fromWhere}
          updateFromWhere={(f)=>this.updateFromWhere(f)}
        />
      );
    } else if (fromWhere == "maxPreviewer") {
      return <Previewer   updateFromWhere={(f)=>this.updateFromWhere(f)} value={value} fromWhere={fromWhere} />;
    } else {
      return (
        <React.Fragment>
          <div className="container mb-5">
            <Editor
              onTextChange={event => this.onTextChange(event)}
              value={value}
              fromWhere={fromWhere}
              updateFromWhere={(f)=>this.updateFromWhere(f)}
            />
            <Previewer   updateFromWhere={(f)=>this.updateFromWhere(f)} value={value} fromWhere={fromWhere} />
          </div>
        </React.Fragment>
      );
    }
  }
}
export default App;
