import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import infoTexts from '../json/Comp_7.json'; // Import the JSON file

export default class Component_7 extends Component {
  render() {
    return (
      <section className="info_section layout_padding-top">
        <div className="info_logo-box">
          <h2>{infoTexts.logoText}</h2>
        </div>
        <div className="container layout_padding2">
          <div className="row">
            <div className="col-md-3">
              <h5>{infoTexts.aboutUsHeading}</h5>
              <p>{infoTexts.aboutUsText}</p>
            </div>
            <div className="col-md-3">
              <h5>{infoTexts.usefulLinksHeading}</h5>
              <ul>
                {infoTexts.usefulLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-3">
              <h5>{infoTexts.contactUsHeading}</h5>
              <p>{infoTexts.contactUsText}</p>
            </div>
            <div className="col-md-3">
              <div className="subscribe_container">
                <h5>{infoTexts.newsletterHeading}</h5>
                <div className="form_container">
                  <form action="">
                    <input type="email" placeholder={infoTexts.newsletterPlaceholder} />
                    <button type="submit">{infoTexts.subscribeButtonText}</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="social_container">
            <div className="social-box">
              {infoTexts.socialMedia.map((social, index) => (
                <a key={index} href={social.href}>
                  <img src={social.icon} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
