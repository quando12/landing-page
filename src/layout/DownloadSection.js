import React,{Component} from 'react';

export default class DownloadSection extends Component {
  render() {
    return(
      <section id="download" className="cta-section parallax" data-parallax="scroll" data-image-src="assets/img/bg.jpg">
       <div className="container">
         <div className="download-app">
           <h2 className="wow fadeInUp" data-wow-delay=".2s">Take A Demo</h2>
           <div className="download-btns">
             <a href="https://expo.io/@geekyants/StrapTaxiApp-Rider" className="wow bounceIn" data-wow-delay=".4s">
               <img src="assets/img/rider.png" alt="true" />
             </a>
             <a href="https://expo.io/@geekyants/StrapTaxiApp-Driver" className="wow bounceIn" data-wow-delay=".6s">
               <img src="assets/img/driverilla.png" alt="true" />
             </a>
             <br /><br />
             <a href="http://taxiapp-web-dashboard.geekydev.com/" className="app-btn wow bounceIn" data-wow-delay="0.8s">
               {/* <i class='ion-android-playstore' ></i> */}
               Web Admin Dashboard Demo
             </a>
           </div>
         </div>

       </div>
     </section>
    );
  }
}
