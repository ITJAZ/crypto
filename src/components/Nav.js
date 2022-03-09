import background1 from "../images/bg01.png";
import React, { Component } from "react";
import WalletTool from './../wallet/walletTool';
class Nav extends Component {

  render() {
    let { titles } = this.props;    
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light sticky-top nav-custom`}
      >
        <img src={background1} className={`nav-bg`} />
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className={`btn custom-link`}>Cool Turtle</a>
            </li>
            <li className="nav-item">
              <a
                className={`btn custom-link`}
                target="_blank"
                href="https://discord.gg/DQJddvmn"
              >
                Discord
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`btn custom-link`}
                target="_blank"
                href="https://twitter.com/CoolTurtle20xx"
              >
                Twitter
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`btn custom-link`}
                target="_blank"
                href="https://instagram.com/coolturtle.nft_?r=nametag"
              >
                {titles.instagram}
              </a>
            </li>
            <li className="nav-item">
              <a className={`btn custom-link`}>OpenSea</a>
            </li>
            <li className="nav-item">
              {!WalletTool.isActive? 
              <a key='connect' className={`btn custom-link`} onClick={WalletTool.connect}> Connect</a>
              :      
              <a key='disconnect' className={`btn custom-link`} onClick={WalletTool.disConnect}> Disconnect</a>
              }
            </li>
            {WalletTool.isActive ? <span>Connecter:{WalletTool.getAccount}</span> : <span>no body</span>}
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
