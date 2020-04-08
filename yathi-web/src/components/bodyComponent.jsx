import React, { Component } from "react";
import Leftrail from "./leftrailComponent";
class BodyRender extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="App-body">
          <div>
            <Leftrail></Leftrail>
          </div>
          <div>
            <ul>
              <li>Testing page</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BodyRender;
