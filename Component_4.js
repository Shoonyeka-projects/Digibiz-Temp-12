// Component_4.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import subscribeTexts from '../json/Comp_4.json'; // Import text strings

export default class Component_4 extends Component {
  render() {
    return (
      <section className="subscribe_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>{subscribeTexts.subscribeHeading}</h2>
          </div>
          <form action="" className="layout_padding2-top">
            <input type="email" placeholder={subscribeTexts.placeholderText} />
            <button>{subscribeTexts.buttonText}</button>
          </form>
        </div>
      </section>
    );
  }
}
