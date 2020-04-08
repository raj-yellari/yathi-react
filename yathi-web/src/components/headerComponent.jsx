import React, { Component } from "react";
import UserDetails from "./userComponent";
class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <img
            src="Yathilogo.png"
            className="App-logo"
            alt="Yathi Technologies"
          />
          <img src="YathiTextlogo.png" alt="Yathi Technologies" />
          <UserDetails></UserDetails>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
