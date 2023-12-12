import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import contactTexts from '../json/Comp_6.json'; // Import the JSON file

export default class Component_6 extends Component {
  render() {
    return (
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="d-flex">
            <h2>{contactTexts.sectionHeading}</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form action="">
                <div className="contact_form-container">
                  <div>
                    <div>
                      <input type="text" placeholder={contactTexts.namePlaceholder} />
                    </div>
                    <div>
                      <input type="text" placeholder={contactTexts.phoneNumberPlaceholder} />
                    </div>
                    <div>
                      <input type="email" placeholder={contactTexts.emailPlaceholder} />
                    </div>
                    <div className="mt-5">
                      <input type="text" placeholder={contactTexts.messagePlaceholder} />
                    </div>
                    <div className="mt-5">
                      <button type="submit">{contactTexts.sendButtonText}</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="contact_img-box">
                <img src="images/contact-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
