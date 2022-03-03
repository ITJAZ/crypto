import React, { Component } from "react";
export default class Sec3 extends Component {
   
    render() {
        let { titles } = this.props;
        return (
            <footer className={`sec3-footer`}>
             
                <div className='row sec3-footer-row'>
                    <div className='sec3-footer-text Kai'>
                        <h3 className='lead'><strong>{titles.footer_lead1}</strong></h3>
                        <p>{titles.footer_content1}</p>
                        <h3 className='lead'><strong>{titles.footer_lead2}</strong></h3>
                        <p>{titles.footer_content2}</p>
                        <p>{titles.footer_content3}</p>
                        <p>{titles.footer_content4}</p>
                        <p>{titles.footer_content5}</p>
                        <h3 className='lead'><strong>{titles.footer_lead3}</strong></h3>
                        <p>{titles.footer_content6}</p>

                    </div>
                </div>
                
            </footer>
        );
    }
}
