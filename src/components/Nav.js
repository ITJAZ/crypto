import * as bootstrap from "bootstrap";
import React, { Component } from "react";

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cool Turtle
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://discord.gg/DQJddvmn">
                Discord
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://twitter.com/CoolTurtle20xx">
                Twitter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="blank" href="https://instagram.com/coolturtle.nft_?r=nametag">
                Instagram
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="blank" href="#">
                OpenSea
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="blank" title="Connect to your wallet" href="#">
                Connect
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
