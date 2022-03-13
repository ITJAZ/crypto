import background1 from "../images/bg01.png";
import React, { Component } from "react";
import WalletTool from './../wallet/walletTool';
class Nav extends Component {

  constructor(){
    super();

    this.ref = React.createRef();
  }

  render() {
    let { titles } = this.props;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light sticky-top nav-custom`}
      >
        <img src={background1} className={`nav-bg`} />
        <div className="collapse navbar-collapse">
          <ul className={`navbar-nav mr-auto`} ref={this.ref}>
            <a className="navbar-toggler" onClick={this.toggleRwd.bind(this)}><span className="navbar-toggler-icon"></span></a>
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
            <li className="nav-item">
              {!WalletTool.isActive? 
              <a key='connect' className={`btn custom-nav-link`} onClick={WalletTool.connect}> Connect</a>
              :      
              <a key='disconnect' className={`btn custom-nav-link`} onClick={WalletTool.disConnect}> Disconnect</a>
              }
            </li>
            {WalletTool.isActive ? <span>Connecter:{WalletTool.getAccount}</span> : <span>no body</span>}
          </ul>
        </div>
      </nav>
    );
  }

  toggleRwd(){
    let navbar = this.ref.current;
    navbar.classList.toggle('responsive');
  }
}
export default Nav;
