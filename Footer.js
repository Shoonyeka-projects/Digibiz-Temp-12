import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <section className="container-fluid footer_section">
        <p>
          &copy; 2019 All Rights Reserved. Design by
          <Link to="https://html.design/">Free Html Templates</Link>
        </p>
      </section>
    )
  }
}
