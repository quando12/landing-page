import React, {Component} from 'react';

export default class FeaturesSection extends Component {

  render(){
    return(
      <section id="features-3" className="features-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".2s">Features</h2>
            <p className="wow fadeInUp" data-wow-delay=".4s">We "'"ve got a lot of awesome features.</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="col-features text-right">
                <div className="col-feature wow fadeInLeft" data-wow-delay=".2s">
                  <i className="ion-model-s" />
                  <h4>Driver as well as Passenger App</h4>
                  <p>
                    The package includes both driver and passenger app with the respective features.
                  </p>
                </div>
                <div className="col-feature wow fadeInLeft" data-wow-delay=".4s">
                  <i className="ion-iphone" style={{fontSize: 21}} />
                  <h4>Ride Booking System</h4>
                  <p>
                    <i className="ion-android-done" /> Nearby drivers are shown on map<br />
                    <i className="ion-android-done" /> Ride request goes to nearby drivers only<br />
                    <i className="ion-android-done" /> Pickup location be set on map<br />
                    <i className="ion-android-done" /> Ride request can be sent to multiple drivers incase one nearby driver rejects or does not respond to the request<br />
                    <i className="ion-android-done" /> Rider receives Email on registration, forgot password , end trip status and ride accept status<br />
                    <i className="ion-android-done" /> Rider receives SMS on end trip and ride accept status<br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mockup wow fadeInUp" data-wow-delay=".2s">
                <img src="assets/img/mockup4.png" alt="true" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="col-features text-left">
                <div className="col-feature wow fadeInRight" data-wow-delay=".2s">
                  <i className="ion-laptop" />
                  <h4>Web Admin Dashboard</h4>
                  <p>
                    Dashboard for admin to manage everything with history of all rides as well as current rides and detail associated with them along with the configurations. <a href="http://taxiapp-web-dashboard.geekydev.com" target="_blank" rel='noopener noreferrer'>Take a look at the demo</a>.
                  </p>
                </div>
                <div className="col-feature wow fadeInRight" data-wow-delay=".4s">
                  <i className="ion-radio-waves" />
                  <h4>Tracking System</h4>
                  <p>
                    <i className="ion-android-done" /> Location updates of driver is received when driver is moving<br />
                    <i className="ion-android-done" /> EnRoute/Arriving/Arrived status is shown based on distance of assigned driver to rider<br />
                    <i className="ion-android-done" /> {"Driver's location as moving car is shown to rider"}<br />
                    <i className="ion-android-done" /> Cancellation right to both rider and driver<br />
                    {/*     <i class='ion-android-done'></i> Contact info, name, rating etc. of driver shown to rider<br> */}
                    <i className="ion-android-done" /> Driver can start and end trip<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
