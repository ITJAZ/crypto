import React, { Component } from "react";
import bg03 from '../images/bg03.png';
import bg04 from '../images/bg04.png';
class Sec1 extends Component {

  render() {
    return (
      <React.StrictMode>
        <div style={{
          width : '100%',
          height: '960px',
          marginTop : '-8vh'
        }}>
          <img src={bg03} className={`bg03`}/>
          <img src={bg04} className={`bg04`}/>

        </div>
      </React.StrictMode>
    );
  }
}
export default Sec1;
