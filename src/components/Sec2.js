import React, { Component } from "react";
import bg03 from "../images/bg03.png";

class Sec2 extends Component {
  render() {
    let { titles } = this.props;

    let contentStyle = {
      paddingLeft: "3%",
    };

    let strokeWidth = 2;

    let headStyle = {
      'textShadow': `-${strokeWidth}px 0 #08a2ff, 0 ${strokeWidth}px #08a2ff, ${strokeWidth}px 0 #08a2ff, 0 -${strokeWidth}px #08a2ff`,
      'color': 'white'
    }

    return (
      <React.StrictMode>
        <div
          style={{
            width: "100%",
            height: "960px",
            backgroundImage: `url(${bg03})`,
          }}
          className="bg03"
        >
          <div className="container">
            <span className="display-4" style={headStyle}>{titles.sec2_lead1}</span>
            <h4 style={contentStyle}>{titles.sec2_content1}</h4>
            <span className="display-4" style={headStyle}>{titles.sec2_lead2}</span>
            <h4 style={contentStyle}>{titles.sec2_content2}</h4>
            <h4 style={contentStyle}>{titles.sec2_content3}</h4>
            <ul>
              <li>
                <span>{titles.sec2_normal_info}</span>
              </li>
              <li>
                <span>{titles.sec2_rare_info}</span>
              </li>
              <li>
                <span>{titles.sec2_legendary_info}</span>
              </li>
              <li>
                <span>{titles.sec2_special_info}</span>
              </li>
            </ul>

            <fieldset className="fieldset">
              <legend>Q&A</legend>
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
            </fieldset>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}
export default Sec2;
