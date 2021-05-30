import react from "react";
import "./header.css";
import logo from "./logo.svg";
import { Button } from "@material-ui/core";
import {Link} from "react-router-dom"

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

              {this.props.showBookShowButton === "true" ?
                  <div className="bookshow-button">
                      <Link to={"/bookshow/" + this.props.id}>
                          <Button variant="contained" color="primary">
                              Book Show
                                </Button>
                      </Link>
                  </div>
                  : ""}
          </div>
      );
  }
}

export default Header;