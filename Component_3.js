// Component_3.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import aboutTexts from '../json/Comp_3.json'; // Import text strings

export default class Component_3 extends Component {
  render() {
    return (
      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container d-flex justify-content-lg-start">
            <h2>About Us</h2>
          </div>
          <div className="layout_padding2-top">
            <div className="row">
              {aboutTexts.texts.map((text, index) => (
                <div className="col-md-5" key={index}>
                  <div className={`detail-box b-${index + 1}`}>
                    <p>{text}</p>
                    <Link to="/your-read-more-path">Read More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
