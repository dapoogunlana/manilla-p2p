

import React, { } from "react";
import { Link } from "react-router-dom";
import { FooterLogo } from "../../../assets/images";

function UserFooter() {

  return (
    <div className="footer pt-2 relative">
      <div className="pattern-holder"></div>
      <div className="w90 p-3 relative">
        <div className="w96 max1200 mt-5">
          <div className="w96 max600">
            <p className="text-center">Subscribe to our newsletter and get notifications to stay updated</p>
            <div className="subscribe-grid inc-grid w96 max600 mb-4">
                <input type="text" placeholder="Enter your email" />
                <span></span>
                <button className="">Subscribe</button>
            </div>
          </div>
          <div className="footer-sector">
            <div className="footer-sect">
              <h6 className="mt-2 mb-3 pb-1 font-weight-bold">Company</h6>
              <p className="reduced-soft">
                <Link to="/">About</Link>
              </p>
              <p className="reduced-soft">
                <Link to="/">Features</Link>
              </p>
              <p className="reduced-soft">
                <Link to="/#">How It Works</Link>
              </p>
              <p className="reduced-soft">
                <Link to="/">Our People</Link>
              </p>
              <p className="reduced-soft">
                <Link to="/">Careers</Link>
              </p>
              <p className="reduced-soft">
                <Link to="/">Contact</Link>
              </p>
            </div>
            <div className="footer-sect">
              <h6 className="mt-2 mb-3 pb-1 font-weight-bold">Trade</h6>
              <p className="reduced-soft">
                <Link to="/">Buy</Link>
              </p>
              <p className="reduced-soft">
                <Link to="/about">Sell</Link>
              </p>
              <p className="reduced-soft">
                <Link to="/projects">Post Trade</Link>
              </p>
            </div>
            <div className="footer-sect">
              <h6 className="mt-2 mb-3 pb-1 font-weight-bold">Explore</h6>
              <p className="reduced-soft">
                <Link to="/">Discover</Link>
              </p>
              <p className="reduced-soft">
                <Link to="/about">FAQs</Link>
              </p>
              <p className="reduced-soft">
                <Link to="/projects">Help</Link>
              </p>
              <p className="reduced-soft">
                <Link to="/news">Learn</Link>
              </p>
              <p className="reduced-soft">
                <Link to="/contact">Product Updates</Link>
              </p>
            </div>
            <div className="footer-sect">
              <h6 className="mt-2 mb-3 pb-1 font-weight-bold">Legal</h6>
              <p className="reduced-soft">
                <Link to="/">Privacy Policy</Link>
              </p>
              <p className="reduced-soft">
                <Link to="/about">Terms and Conditions</Link>
              </p>
              <p className="reduced-soft">
                <Link to="/projects">AML policy</Link>
              </p>
            </div>
            <div className="footer-sect">
              <div className="fit-footer-logo mt-2">
                <img src={FooterLogo} width={'170px'} alt="" />
              </div>
              <div className="spread-info-front mt-3 media-icons">
                  <a href="https://t.me/themanilla" target="_blank" rel="noreferrer"><i className="fab fa-telegram-plane increased-x"></i></a>
                  <a href="https://twitter.com/TheManilla" target="_blank" rel="noreferrer" className="mx-3"><i className="fab fa-twitter increased-x"></i></a>
                  <a href="https://www.instagram.com/sin.verse" target="_blank" rel="noreferrer"><i className="fab fa-linkedin increased-x"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="center-info reduced">
          {/* <p className="mt-2 mb-2 center-mobile">
            © Manilla {new Date().getFullYear()} . All right reserved
          </p>
          <div className="spread-info-web center-mobile">
            <p className="reduced-soft mt-2 mb-2 mx-3">
              <Link to="/home">Home</Link>
            </p>
            <p className="reduced-soft mt-2 mb-2 mx-3">
              <Link to="/tokenomics">Tokenomics</Link>
            </p>
            <p className="reduced-soft mt-2 mb-2 mx-3">
              <Link to="/about">About</Link>
            </p>
            <p className="reduced-soft mt-2 mb-2 mx-3">
              <Link to="/contact">Contact</Link>
            </p>
          </div>
          <div className="spread-info">
            <p className="mt-2 mb-2 mx-3">
              <a href="https://t.me/MinalandToken" target="_blank" rel="noreferrer"><i className="fab fa-telegram-plane increased-xl"></i></a>
            </p>
            <p className="mt-2 mb-2 mx-3">
              <a href="https://twitter.com/MinalandToken" target="_blank" rel="noreferrer"><i className="fab fa-twitter increased-xl"></i></a>
            </p>
            <p className="mt-2 mb-2 mx-3">
              <a href="https://youtube.com/channel/UCF3zAwsS15skwKdSDGgrYgg" target="_blank" rel="noreferrer"><i className="fab fa-youtube increased-xl"></i></a>
            </p>
            <p className="mt-2 mb-2 mx-3">
              <a href="https://medium.com/@minalandtoken" target="_blank" rel="noreferrer"><i className="fab fa-medium-m increased-xl"></i></a>
            </p>
          </div> */}
        </div>
      </div>
      <div className="center-info reduced footer-base relative">
          <p className="pt-4 pb-3 center-mobile">
            © Manilla Technologies {new Date().getFullYear()} . All right reserved
          </p>
        </div>
    </div>
  );
}
export default UserFooter;
