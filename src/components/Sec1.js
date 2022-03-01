import React, { Component } from "react";
import bg04 from '../images/bg04.png';
class Sec1 extends Component {

  render() {
    let { style } = this.props;
    
    return (
      <React.StrictMode>
        <div className={`App ${style['bg03']}`}>
          <img src={bg04} className={style['bg04']}/>

        </div>
      </React.StrictMode>
    );
  }
}
export default Sec1;
