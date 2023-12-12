import React from 'react';
import { Link } from 'react-router-dom';
import featureSectionData from '../json/Comp_1.json'; // Adjust the path accordingly

function FeatureSection() {
  const { sections, readMoreLink } = featureSectionData;

  return (
    <section className="feature_section layout_padding2 layout_margin">
      <div className="container">
        <div className="heading_container">
          <h2>
            Amazing Features To Use <br />
            Our Application
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {sections.map((section, index) => (
            <div key={index} className="col-md-4">
              <div className="box">
                <div className="head-box">
                  <div className="img-box">
                    <svg height="512pt" viewBox="0 0 512 512.08926" width="512pt" xmlns="http://www.w3.org/2000/svg">
                      {/* Your SVG path here */}
                    </svg>
                  </div>
                  <h6>{section.title}</h6>
                </div>
                <div className="detail-box">
                  <p>{section.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link to={readMoreLink}>Read More</Link>
      </div>
    </section>
  );
}

export default FeatureSection;
