import React, {Component} from 'react';

export default class MockupSection2 extends Component {
  render() {
    return(
      <section id="features-2" className="mockup-section section-2">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-md-push-5">
              <div className="mockup-shadow">
                <img className="shadow wow fadeIn" data-wow-delay=".4s" data-wow-offset={200} data-wow-duration="1.2s" src="assets/img/mockup3-shadow.png" alt="true" />
                <img className="phone wow fadeInDown" data-wow-delay=".2s" data-wow-offset={200} data-wow-duration="1.2s" src="assets/img/mockup3-phone.png" alt="true" />
              </div>
            </div>
            <div className="col-md-5 col-md-pull-7">
              <div className="mockup-text">
                <span className="font-alt wow fadeInUp" data-wow-delay=".2s">Powerful &amp; </span>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">Functional App</h2>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  The app theme has functional features of a Taxi app like tracking system, ride booking system, rating system, push notifications, social login via Facebook &amp; Google, trip history and so much more.
                </p>
                <a href="#download" className="btn-custom arrow-btn wow fadeInUp" data-wow-delay=".8s">
                  Take A Demo
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
