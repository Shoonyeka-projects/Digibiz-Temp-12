import React, { Component } from 'react'

export default class Slider extends Component {
  render() {
    return (
        <div class="hero_area">
        <section class=" slider_section position-relative">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="detail-box">
                <h2>
                  best design
                </h2>
                <h1>
                  Mobile <br />
                  applications
                </h1>
                <div>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
