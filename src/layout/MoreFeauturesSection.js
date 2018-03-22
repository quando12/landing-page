import React,{Component} from 'react';

export default class MoreFeauturesSection extends Component {
  render() {
    return(
      <section id="features-4" className="features-2-section">
       <div className="container">
         <div className="section-header text-center">
           <h2 className="wow fadeInUp" data-wow-delay=".2s">More Features</h2>
           <p className="wow fadeInUp" data-wow-delay=".4s">We're just not running out of those.</p>
         </div>
         <div className="row">
           <div className="col-md-4">
             <div className="icon-feature wow fadeInUp" data-wow-delay=".2s">
               <div className="icon">
                 <i className="ion-android-notifications-none" />
               </div>
               <div className="content">
                 <h4>Push notifications </h4>
                 <p>
                   On any of the staus no-nearby/enRoute/arriving/arrived, a notification is sent to user.
                 </p>
               </div>
             </div>
           </div>
           <div className="col-md-4">
             <div className="icon-feature wow fadeInUp" data-wow-delay=".4s">
               <div className="icon">
                 <i className="ion-ios-star-outline" />
               </div>
               <div className="content">
                 <h4>Rating System</h4>
                 <p>
                   Both driver and rider can provide rating to each other after trips.<br /> Contact info, name, rating etc. of driver is shown to rider.
                 </p>
               </div>
             </div>
           </div>
           <div className="col-md-4">
             <div className="icon-feature wow fadeInUp" data-wow-delay=".6s">
               <div className="icon">
                 <i className="ion-android-calendar" />
               </div>
               <div className="content">
                 <h4>Trip History</h4>
                 <p>
                   Trip history is stored and shown in the app as well as dashboard.
                 </p>
               </div>
             </div>
           </div>
         </div>
         <div className="row">
           <div className="col-md-4">
             <div className="icon-feature wow fadeInUp" data-wow-delay=".2s">
               <div className="icon">
                 <i className="icon-ecommerce-wallet" />
               </div>
               <div className="content">
                 <h4>Payment Gateway</h4>
                 <p>
                   Stripe is used to implement payment via card.
                 </p>
               </div>
             </div>
           </div>
           <div className="col-md-4">
             <div className="icon-feature wow fadeInUp" data-wow-delay=".4s">
               <div className="icon">
                 <i className="ion-social-facebook-outline" />
               </div>
               <div className="content">
                 <h4>Social Login</h4>
                 <p>
                   Social Login via Google &amp; Facebook is implemented.
                 </p>
               </div>
             </div>
           </div>
           <div className="col-md-4">
             <div className="icon-feature wow fadeInUp" data-wow-delay=".6s">
               <div className="icon">
                 <i className="icon-ecommerce-graph1" />
               </div>
               <div className="content">
                 <h4>Fare estimation</h4>
                 <p>
                   Fare estimation is shown to riders based on distance, duration &amp; base fare, all of which can be configured via the web dashboard
                 </p>
               </div>
             </div>
           </div>
         </div>
         <div className="mockup">
           <img className="shadow wow zoomIn animated" src="assets/img/perspective-shadow.png" alt="true" />
           <img className="phone wow fadeInDown animated" src="assets/img/perspective-phone.png" alt="true" />
         </div>
       </div>
     </section>
    );
  }
}
