import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import downloadSectionData from '../json/Comp_2.json'; // Adjust the path accordingly

export default class Component_2 extends Component {
  render() {
    const { sections, mainImgSrc, downloadBtnText, downloadBtnLink } = downloadSectionData;

    return (
      <section className="download_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>Download Anytime, Anywhere</h2>
          </div>
          <div className="layout_padding2-top">
            <div className="row">
              {sections.map((section, index) => (
                <div key={index} className="col-md-4">
                  <div className="box">
                    <div className="head-box">
                      <div className="img-box">
                        <img src={section.imgSrc} alt="" />
                      </div>
                      <h6>{section.title}</h6>
                    </div>
                    <div className="detail-box">
                      <p>{section.description}</p>
                    </div>
                  </div>
                  <div>
                    <Link to={section.link} className="btn-1">
                      {section.btnText}
                    </Link>
                  </div>
                </div>
              ))}
              <div className="col-md-4">
                <div className="main-img-box">
                  <img src={mainImgSrc} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="head-box">
                    <div className="img-box">
                      <img src="images/playstore.png" alt="" />
                    </div>
                    <h6>Connect Your Store</h6>
                  </div>
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="head-box">
                    <div className="img-box">
                      <img src="images/heart.png" alt="" />
                    </div>
                    <h6>Enjoy Our App</h6>
                  </div>
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                  </div>
                </div>
                <div>
                  <Link to={downloadBtnLink} className="btn-2">
                    {downloadBtnText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
