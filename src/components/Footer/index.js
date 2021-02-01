/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';

import socialIcons from '../../utils/socialIcons';
import useMobileWidth from '../../utils/hooks/useMobileWidth';

import go from '../../assets/images/golden_owl.png';
import vnflag from '../../assets/images/vn.svg';
import usflag from '../../assets/images/us.svg';
import noflag from '../../assets/images/no.svg';
import auflag from '../../assets/images/au.svg';
import sgflag from '../../assets/images/sg.svg';

import './index.sass';

const Footer = () => {
  const isMobile = useMobileWidth();

  const mobileRender = () => (
    <div className="footer__bottom-content-wrapper">
      <img className="d-block" src={go} alt="golden-logo" />
      <div className="footer__bottom-grid-container">
        <div className="row footer__bottom-grid-row">
          <div className="col-6">
            <h3 className="footer__bottom-grid-title">Our Services</h3>
            <div>
              <Link to="/services/web-development">Website development</Link>
              <Link to="/services/mobile-development">Mobile development</Link>
              <Link to="/services/ux-ui-design">UX UI design</Link>
              <Link to="/services/project-management">Project management</Link>
              <Link to="/services/development-team">Development team</Link>
              <Link to="/services/automation-testing">Automation testing</Link>
              <Link to="/services/it-solutions-consulting">
                IT solutions consulting
              </Link>
            </div>
          </div>
          <div className="col-6">
            <h3 className="footer__bottom-grid-title">Links</h3>
            <div>
              <Link to="/about-us">About us</Link>
              <Link to="/services">Services</Link>
              <Link to="/technologies">Technologies</Link>
              <Link to="/testimonial">Testimonials</Link>
              <Link to="/portfolio" target="_blank">
                Portfolio
              </Link>
            </div>
          </div>
          <div className="col-6">
            <h3 className="footer__bottom-grid-title">Others</h3>
            <div>
              {/* <Link to="/activity">Activity</Link> */}
              <Link to="/careers">Careers</Link>
              <Link to="/contact-us">Contact us</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/blog" target="_blank">
                Blog
              </Link>
            </div>
          </div>
          <div className="col-6">
            {/* <div className="footer__contact row">
              <span className="col-12 footer__phone">
                <a href="tel:(+84) 912 878 985">
                  (+84) 912 878 985
                </a>
              </span>
            </div> */}
            <div className="footer__social-icons-wrapper d-flex justify-content-start align-items-center">
              {socialIcons.map((icon, idx) => (
                <a key={idx} href={icon.link}>
                  <img
                    key={icon.name}
                    src={icon.url}
                    className={`footer__social-icon d-inline-block footer__icon-${icon.name}`}
                    alt={icon.name}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const defaultRender = () => (
    <div className="footer__bottom-content-wrapper">
      <div className="footer__logo-wrapper">
        <img className="d-block" src={go} alt="golden-logo" />
        <div className="footer__social-icons-wrapper d-flex justify-content-start align-items-center">
          {socialIcons.map((icon, idx) => (
            <a key={idx} href={icon.link}>
              <img
                key={icon.name}
                src={icon.url}
                className={`footer__social-icon d-inline-block footer__icon-${icon.name}`}
                alt={icon.name}
                loading="lazy"
              />
            </a>
          ))}
        </div>
        {/* <div className="footer__contact row">
        <span className="col-12 footer__phone">
          <a href="tel:(+84) 912 878 985">
            (+84) 912 878 985
          </a>
        </span>
      </div> */}
      </div>
      <div className="footer__bottom-grid-container">
        <div className="row footer__bottom-grid-row">
          <div className="col-md-6 pl-0 ">
            <h3 className="footer__bottom-grid-title">Our Services</h3>
            <div>
              <Link to="/services/web-development">Website development</Link>
              <Link to="/services/mobile-development">Mobile development</Link>
              <Link to="/services/ux-ui-design">UX UI design</Link>
              <Link to="/services/project-management">Project management</Link>
              <Link to="/services/development-team">Development team</Link>
              <Link to="/services/automation-testing">Automation testing</Link>
              <Link to="/services/it-solutions-consulting">
                IT solutions consulting
              </Link>
            </div>
          </div>
          <div className="col-md-4 pl-0">
            <h3 className="footer__bottom-grid-title">Links</h3>
            <div>
              <Link to="/about-us">About us</Link>
              <Link to="/services">Services</Link>
              <Link to="/technologies">Technologies</Link>
              <Link to="/testimonial">Testimonials</Link>
              <Link to="/portfolio" target="_blank">
                Portfolio
              </Link>
            </div>
          </div>
          <div className="col-md-2 pl-0">
            <h3 className="footer__bottom-grid-title">Others</h3>
            <div>
              {/* <Link to="/activity">Activity</Link> */}
              <Link to="/careers">Careers</Link>
              <Link to="/contact-us">Contact us</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/blog" target="_blank">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <footer id="footer" className="footer">
      <div className="footer__top-content-wrapper">
        <h4 className="footer__top-content-title">Office locations</h4>
        <div className="row">
          <div className="col-6 col-md-4 pr-5 pr-md-0">
            <h5 className="d-flex align-items-start">
              Viet Nam
              <img
                className="flag shadow-sm ml-2"
                src={vnflag}
                alt="GO-Vietnam"
              />
            </h5>
            <p>
              MB Bank Building, 538 CMT8
              <br />
              Ward 11, District 3,
              <br />
              Ho Chi Minh City
            </p>
            <p>
              <a href="tel:(+84) 2838 4600 98">(+84) 2838 4600 98</a>
            </p>
          </div>
          <div className="col-6 col-md-4">
            <h5 className="d-flex align-items-start">
              Australia
              <img
                className="flag shadow-sm ml-2"
                src={auflag}
                alt="GO-Australia"
              />
            </h5>
            <p>
              Suite 8, Level 2, 1 Box Road,
              <br />
              Taren Point, NSW 2229
            </p>
            <p>
              <a href="tel:(+02) 8212 4222">(+02) 8212 4222</a>
            </p>
          </div>
          <div className="col-6 col-md-4">
            <h5 className="d-flex align-items-start">
              United States
              <img
                className="flag shadow-sm ml-2"
                src={usflag}
                alt="United States Flag"
              />
            </h5>
            <p>
              4 Park Ave Apt 21A New York,
              <br />
              New York 10016
            </p>
            <p>
              <a href="tel:(+1) 509 714 2248">(+1) 509 714 2248</a>
            </p>
          </div>
          <div className="col-6 col-md-4">
            <h5 className="d-flex align-items-start">
              Norway
              <img
                className="flag shadow-sm ml-2"
                src={noflag}
                alt="Go-Norway"
              />
            </h5>
            <p>
              Romemyra 30,
              <br className="d-block" />
              7091 Tiller
            </p>
            <p>
              <a href="tel:(+47) 9586 9324">(+47) 9586 9324</a>
            </p>
          </div>
          <div className="col-6 col-md-4">
            <h5 className="d-flex align-items-start">
              Singapore
              <img
                className="flag shadow-sm ml-2"
                src={sgflag}
                alt="GO-Australia"
              />
            </h5>
            <p>
              Block 333A,
              <br />
              Yishun Street 31 #15-207
            </p>
            <p>
              <a href="tel:(+65) 9672 9784">(+65) 9672 9784</a>
            </p>
          </div>
        </div>
      </div>
      {isMobile ? mobileRender() : defaultRender()}
      <div className="footer__copyright">
        <p>Copyright 2015 © Golden Owl Consulting</p>
      </div>
    </footer>
  );
};

export default Footer;
