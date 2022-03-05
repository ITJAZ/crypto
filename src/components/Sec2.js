import React, { Component } from "react";
import normalCardIcon from "../images/head-green.png";
import rareCardIcon from "../images/head-pink.png";
import legendaryCardIcon from "../images/head-yellow.png";
import speicalCardIcon from "../images/head-purple.png";

import head01 from "../images/head01.jpg";
import head02 from "../images/head02.jpg";
import head03 from "../images/head03.jpg";
import head04 from "../images/head04.jpg";
import head05 from "../images/head05.jpg";
import head06 from "../images/head06.jpg";
import head07 from "../images/head07.jpg";
import head08 from "../images/head08.jpg";
import head09 from "../images/head09.jpg";
import head10 from "../images/head10.jpg";
import head11 from "../images/head11.jpg";
import head12 from "../images/head12.jpg";
import head13 from "../images/head13.jpg";

class Sec2 extends Component {
  render() {
    let { titles } = this.props;

    let contentStyle = {
      paddingLeft: "3%",
    };

    let turtleHeadIconStyle = {
      width: "auto",
      height: "auto",
      maxwidth: "20px",
      maxHeight: "20px",
    };

    let strokeWidth = 2;

    let headStyle = {
      textShadow: `
      -${strokeWidth}px 0 #08a2ff,
       0 ${strokeWidth}px #08a2ff,
        ${strokeWidth}px 0 #08a2ff,
         0 -${strokeWidth}px #08a2ff`,
      color: "white",
      paddingTop: "1%",
    };

    return (
      <React.StrictMode>
        <div className="container">
          <span className="display-4" style={headStyle}>
            {titles.sec2_lead1}
          </span>
          <h4 style={contentStyle}>{titles.sec2_content1}</h4>
          <DemoGallary1 />
          <span className="display-4" style={headStyle}>
            {titles.sec2_lead2}
          </span>
          <h4 style={contentStyle}>{titles.sec2_content2}</h4>
          <h4 style={contentStyle}>{titles.sec2_content3}</h4>
          <p style={contentStyle}>
            <img src={normalCardIcon} style={turtleHeadIconStyle} />
            {titles.sec2_normal_info}
          </p>
          <p style={contentStyle}>
            <img src={rareCardIcon} style={turtleHeadIconStyle} />
            {titles.sec2_rare_info}
          </p>
          <p style={contentStyle}>
            <img src={legendaryCardIcon} style={turtleHeadIconStyle} />
            {titles.sec2_legendary_info}
          </p>
          <p style={contentStyle}>
            <img src={speicalCardIcon} style={turtleHeadIconStyle} />
            {titles.sec2_special_info}
          </p>
          <DemoGallary2 />
          <fieldset className="fieldset">
            <legend>Q&A</legend>
            <Accordion titles={titles} />
          </fieldset>
        </div>
      </React.StrictMode>
    );
  }
}

class DemoGallary1 extends Component {
  render() {
    let headStyle = {
      boxShadow: "#343434 9px 7px 17px 6px",
      width: "auto",
      height: "auto",
      maxWidth: "300px",
      maxHeight: "300px",
      borderRadius: "2%",
    };

    return (
      <div className="row">
        <div class="col-sm text-center">
          <img src={head01} style={headStyle} />
        </div>
        <div class="col-sm text-center">
          <img src={head02} style={headStyle} />
        </div>
        <div class="col-sm text-center">
          <img src={head03} style={headStyle} />
        </div>
      </div>
    );
  }
}

class DemoGallary2 extends Component {
  render() {
    let picStyle = {
      width: "auto",
      height: "auto",
      maxWidth: "200px",
      maxHeight: "200px",
      border: "1px solid black",
    };
    return (
      <React.StrictMode>
        <div className="row">
          <div class="col-sm text-center">
            <img src={head04} style={picStyle} />
          </div>
          <div class="col-sm text-center">
            <img src={head05} style={picStyle} />
          </div>
          <div class="col-sm text-center">
            <img src={head06} style={picStyle} />
          </div>
          <div class="col-sm text-center">
            <img src={head07} style={picStyle} />
          </div>
          <div class="col-sm text-center">
            <img src={head08} style={picStyle} />
          </div>
          <div class="col-sm text-center">
            <img src={head09} style={picStyle} />
          </div>
          <div class="col-sm text-center">
            <img src={head10} style={picStyle} />
          </div>
          <div class="col-sm text-center">
            <img src={head11} style={picStyle} />
          </div>
          <div class="col-sm text-center">
            <img src={head12} style={picStyle} />
          </div>
          <div class="col-sm text-center">
            <img src={head13} style={picStyle} />
          </div>
        </div>
      </React.StrictMode>
    );
  }
}

class Accordion extends Component {
  render() {
    let { titles } = this.props;
    return (
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {titles.question1}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{titles.answer1}</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {titles.question2}
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{titles.answer2}</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {titles.question3}
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{titles.answer3}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sec2;
