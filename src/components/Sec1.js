import React, { Component } from "react";
import bg04 from '../images/bg04.png';
import logo1 from '../images/logo01.png';
import logo2 from '../images/logo02.png';
class Sec1 extends Component {

  render() {
    return (
      <React.StrictMode>
        <div style={{
          width : '100%',
          height: '960px',
          marginTop : '-8vh'
        }}>
          <img src={bg04} className={`bg04`}/>
          <img src={logo1} className={`logo logo1`}/>
          <img src={logo2} className={`logo logo2`}/>

        </div>
      </React.StrictMode>
    );
  }
}
export default Sec1;
