import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import texts from '../json/Comp_5.json'; // Import the JSON file

export default class Component_5 extends Component {
  render() {
    return (
      <section className="client_section layout_margin">
        <div className="container">
          <div className="heading_container">
            <h2>{texts.sectionHeading}</h2>
          </div>
          <div className="client_container layout_padding2-top">
            <div className="client-id">
              <div className="img-box">
                <img src="images/client.png" alt="" />
              </div>
              <div className="name">
                <img src="images/quote.png" alt="" />
                <h6>{texts.clientName}</h6>
                <p>{texts.clientQuote}</p>
              </div>
            </div>
            <div className="client-detail">
              <p>{texts.clientDetail}</p>
            </div>
            <div className="d-flex justify-content-end">
              <Link to="/your-link-path">{texts.readMoreLinkText}</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
