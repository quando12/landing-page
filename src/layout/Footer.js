import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return(
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p className="wow fadeInLeft" data-wow-delay=".2s" style={{textTransform: 'none'}}>
                © 2017&nbsp;&nbsp;&nbsp;All Rights Reserved by&nbsp;&nbsp;&nbsp;
                <a style={{textDecoration: 'none'}} target="_blank" rel="noopener noreferrer" href="http://www.geekyants.com/"><img src="https://geekyants.com/images/logo-icon-lg.png" alt="geekyants" width="35px" style={{paddingRight: 5}} />GeekyAnts</a>
              </p>
            </div>
            <div className="col-sm-6">
              {/* Footer Social Icons */}
              <ul className="footer-social wow fadeInRight" data-wow-delay=".2s">
                <li>
                  <a href="https://www.facebook.com/geekyants/">
                    <i className="ion-social-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/GeekyAnts">
                    <i className="ion-social-twitter" />
                  </a>
                </li>
                {/* <li>
								<a href='#' >
									<i class='ion-social-pinterest' ></i>
								</a>
							</li>
							<li>
								<a href='#' >
									<i class='ion-social-dribbble' ></i>
								</a>
							</li> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
