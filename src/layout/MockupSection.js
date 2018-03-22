import React, {Component} from 'react';

export default class MockupSection extends Component {
  render(){
    return(
      <section id="features-1" className="mockup-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="screens-mockup">
                <img className="phone wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s" src="assets/img/mockup2-phone.png" alt="true" />
                <img className="screen wow fadeIn" data-wow-delay="1s" src="assets/img/mockup2-screen1.png" alt="true" />
                <img className="screen wow fadeIn" data-wow-delay="1.4s" src="assets/img/mockup2-screen2.png" alt="true" />
                <img className="screen wow fadeIn" data-wow-delay="1.8s" src="assets/img/mockup2-screen3.png" alt="true" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="mockup-text">
                <span className="font-alt wow fadeInUp" data-wow-delay=".2s">Elegant &amp; </span>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">Perfect Design</h2>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Professional look with awesomely smooth feel and theme-specific design. <br /> Fully customizable, ready-to-use screens for users with easily configurable application design, and the right UX for a Taxi App.
                </p>
                <a href="#screenshots" className="btn-custom arrow-btn wow fadeInUp" data-wow-delay=".8s">
                  Take a better look
                  <span className="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
