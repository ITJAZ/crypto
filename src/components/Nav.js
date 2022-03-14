import background1 from "../images/bg01.png";
import React, { Component } from "react";
import WalletTool from "./../wallet/walletTool";
class Nav extends Component {
  render() {
    let { titles } = this.props;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light sticky-top nav-custom`}
      >
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#custom-navbar-collapse"
          aria-controls="custom-navbar-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <img src={background1} className={`nav-bg`} />
        <div id="custom-navbar-collapse" className="collapse navbar-collapse">
          <ul className={`navbar-nav mr-auto`}>
            <li className="nav-item">
              <a className={`btn custom-nav-link`}>Cool Turtle</a>
            </li>
            <li className="nav-item">
              <a
                className={`btn custom-nav-link`}
                target="_blank"
                href="https://discord.gg/DQJddvmn"
              >
                Discord
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`btn custom-nav-link`}
                target="_blank"
                href="https://twitter.com/CoolTurtle20xx"
              >
                Twitter
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`btn custom-nav-link`}
                target="_blank"
                href="https://instagram.com/coolturtle.nft_?r=nametag"
              >
                {titles.instagram}
              </a>
            </li>
            <li className="nav-item">
              <a className={`btn custom-nav-link`}>OpenSea</a>
            </li>
            <WalletTool/>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
