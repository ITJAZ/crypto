import background1 from "../images/bg01.png";
import React, { Component } from "react";
class Nav extends Component {
  render() {
    let { titles, style } = this.props;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light sticky-top ${style["nav-custom"]}`}
      >
        <img src={background1} className={style["nav-bg"]} />
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className={`btn ${style["custom-link"]}`}>Cool Turtle</a>
            </li>
            <li className="nav-item">
              <a
                className={`btn ${style["custom-link"]}`}
                target="_blank"
                href="https://discord.gg/DQJddvmn"
              >
                Discord
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`btn ${style["custom-link"]}`}
                target="_blank"
                href="https://twitter.com/CoolTurtle20xx"
              >
                Twitter
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`btn ${style["custom-link"]}`}
                target="_blank"
                href="https://instagram.com/coolturtle.nft_?r=nametag"
              >
                {titles.instagram}
              </a>
            </li>
            <li className="nav-item">
              <a className={`btn ${style["custom-link"]}`}>OpenSea</a>
            </li>
            <li className="nav-item">
              <a className={`btn ${style["custom-link"]}`}>Connect</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
