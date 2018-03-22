import React,{Component} from 'react';

export default class ContactSection extends Component {
  render() {
    return(

            <section id="contact" className="contact-section">
              <div className="container">
                <div className="section-header text-center">
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">Say Hello!</h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">If you've got any questions, mail us, we will get in touch</p>
                </div>
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <form id="contact-form" name="contactForm" className="contact-form" data-toggle="validator" action="mail.php" method="post">
                      <div id="contact-form-result" />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" className="form-control wow fadeInUp" data-wow-delay=".4s" name="name" placeholder="Name" required />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="email" className="form-control wow fadeInUp" data-wow-delay=".5s" name="email" placeholder="Email" required />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control wow fadeInUp" data-wow-delay=".6s" name="subject" placeholder="Subject" required />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group">
                        <textarea className="form-control wow fadeInUp" data-wow-delay=".8s" name="message" placeholder="Message" rows={5} required defaultValue={""} />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group text-center">
                        <button type="submit" className="btn-custom wow fadeInUp" data-wow-delay="1s">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
    );
  }
}
