import React,{Component} from 'react';

export default  class DashboardSection extends Component {
  render() {
    return(
      <section id="screenshots" className="screenshots-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".2s">web admin dashboard</h2>
            <p className="wow fadeInUp" data-wow-delay=".4s">
            </p>
          </div>
          <ul className="screenshots-slider wow fadeInRight" data-wow-delay=".6s">
            <li>
              <figure>
                <img src="assets/img/AdminDashboardScreenShots/1.png" alt="true" />
                <div className="overlay">
                  <a href="assets/img/AdminDashboardScreenShots/1.png" className="view-btn" >Demo</a>
                </div>
              </figure>
            </li>
            <li>
              <figure>
                <img src="assets/img/AdminDashboardScreenShots/2.png" alt="true" />
                <div className="overlay">
                  <a href="assets/img/AdminDashboardScreenShots/2.png" className="view-btn" >Demo</a>
                </div>
              </figure>
            </li>
            <li>
              <figure>
                <img src="assets/img/AdminDashboardScreenShots/3.png" alt="true" />
                <div className="overlay">
                  <a href="assets/img/AdminDashboardScreenShots/3.png" className="view-btn" >Demo</a>
                </div>
              </figure>
            </li>
            <li>
              <figure>
                <img src="assets/img/AdminDashboardScreenShots/4.png" alt="true" />
                <div className="overlay">
                  <a href="assets/img/AdminDashboardScreenShots/4.png" className="view-btn" >Demo</a>
                </div>
              </figure>
            </li>
            <li>
              <figure>
                <img src="assets/img/AdminDashboardScreenShots/5.png" alt="true" />
                <div className="overlay">
                  <a href="assets/img/AdminDashboardScreenShots/5.png" className="view-btn" >Demo</a>
                </div>
              </figure>
            </li>
            <li>
              <figure>
                <img src="assets/img/AdminDashboardScreenShots/6.png" alt="true" />
                <div className="overlay">
                  <a href="assets/img/AdminDashboardScreenShots/6.png" className="view-btn" >Demo</a>
                </div>
              </figure>
            </li>
            <li>
              <figure>
                <img src="assets/img/AdminDashboardScreenShots/7.png" alt="true" />
                <div className="overlay">
                  <a href="assets/img/AdminDashboardScreenShots/7.png" className="view-btn" >Demo</a>
                </div>
              </figure>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
