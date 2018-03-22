import React,{Component} from 'react';

export default class PricingSection extends Component {
  render() {
    return(
      <section id="pricing" className="pricing-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".2s">Pricing</h2>
            <p className="wow fadeInUp" data-wow-delay=".4s">We've got affordable pricing packages</p>
          </div>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-4">
              <div className="p-table wow fadeInLeft" data-wow-delay=".8s">
                <div className="header">
                  <h4>Single License</h4>
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">1299</span>
                    {/* <span class='period' >/month</span> */}
                  </div>
                </div>
                <ul className="items">
                  <li>One Android app</li>
                  <li>One iOS app</li>
                  <li>6 months of free support, updates</li>
                </ul>
                <a href="https://market.nativebase.io/view/react-native-taxi-app-with-backend#buyNow" className="pricing-btn arrow-btn">
                  Choose This
                  <span className="arrow" />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-table wow fadeInRight" data-wow-delay=".8s">
                <div className="header">
                  <h4>Multiple License</h4>
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">3599</span>
                    {/* <span class='period' >/month</span> */}
                  </div>
                </div>
                <ul className="items">
                  <li>5 Android apps</li>
                  <li>5 iOS apps</li>
                  <li>6 months of free support, updates</li>
                </ul>
                <a href="https://market.nativebase.io/view/react-native-taxi-app-with-backend#buyNow" className="pricing-btn arrow-btn">
                  Choose This
                  <span className="arrow" />
                </a>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </section>
    );
  }
}
