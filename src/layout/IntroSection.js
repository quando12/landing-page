import React, { Component } from 'react';

class IntroSection extends Component {
  render() {
    return (
      <section id="intro" className="main-section parallax" data-parallax="scroll" data-image-src="img/bg-main.jpg">
              <div id="particles" className="particle-bg" ></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="intro-text">
                      <h1 className="wow fadeInUp" data-wow-delay=".2s">
                        Strap Taxi App Script
                      </h1>
                      <p className="font-alt wow fadeInUp" data-wow-delay=".4s">Complete Taxi App for iOS and Android with rich features as in Uber / Ola / Lyft</p>
                      <div className="btns">
                        <a href="https://expo.io/@geekyants/StrapTaxiApp-Rider" className="app-btn wow bounceIn" data-wow-delay=".6s">
                          {/* <i class='ion-social-apple' ></i> */}
                          Rider App Demo
                        </a>
                        <a href="https://expo.io/@geekyants/StrapTaxiApp-Driver" className="app-btn wow bounceIn" data-wow-delay=".8s">
                          {/* <i class='ion-android-playstore' ></i> */}
                          Driver App Demo
                        </a><br />
                        <a href="http://taxiapp-web-dashboard.geekydev.com/" className="app-btn wow bounceIn" data-wow-delay="1.0s">
                          {/* <i class='ion-android-playstore' ></i> */}
                          Web Admin Dashboard Demo
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mockup">
                      <img src="assets/img/mockup1-front.png" className="front wow fadeInDown" data-wow-duration=".7s" data-wow-delay="1.6s" alt="true" />
                      <img src="assets/img/mockup1-back.png" className="back wow fadeInDown" data-wow-duration=".7s" data-wow-delay="1.3s" alt="true" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
    );
  }
}

export default IntroSection;
