import React, { Component } from "react";
import Leftrail from "./leftrailComponent";
import homeContent from "../staticData/landingPage/home.json";
const homeContentList = homeContent.homepage;
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
              {homeContentList.map(s => (
                <li>{s.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BodyRender;
