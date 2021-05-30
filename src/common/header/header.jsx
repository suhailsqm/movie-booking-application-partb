import react from "react";
import "./header.css";

import logo from "./logo.svg";

import { Button } from "@material-ui/core";

class Header extends react.Component {
  render() {
    return (
      <div className="app-header">
        <img src={logo} alt="logo" className="app-logo"></img>
        <div className="login-button">
          <Button
            variant="contained"
            color="default"
           
          >
            Login
          </Button>
        </div>

        <div className="bookshow-button">
          <Button variant="contained" color="primary">
            Book Show
          </Button>
        </div>
      </div>
    );
  }
}

export default Header;