import * as bootstrap from "bootstrap";
import background1 from "../images/bg01.png";
import React, { Component } from "react";
import styled from "styled-components";

class Nav extends Component {

  render() {
    const Background = styled.div`
      background-image: url(${background1});
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 56px;
      position: absolute;
      top: 0px;
      z-index:-1;
    `
    let { titles } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <Background/>
        <div className="collapse navbar-collapse">
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
              <a className="nav-link" target="_blank" href="https://instagram.com/coolturtle.nft_?r=nametag">
                {titles.instagram}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="#">
                OpenSea
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" title="Connect to your wallet" href="#">
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
