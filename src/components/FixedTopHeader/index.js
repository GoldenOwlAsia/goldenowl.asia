import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import arrowRight from '../../assets/images/arrow-right-white.png';
import arrowDown from '../../assets/images/chevron-down-solid-white.png';
import goWhite from '../../assets/images/goWhite.png';

import ServicesData from '../../utils/servicesMenuContent';

import './index.sass';
import './service.sass';

class FixedTopHeader extends Component {
  render() {
    return (
      <header id="fixed-top-header" className="fixed-top-header fixed-top">
        <img src={goWhite} className="fixed-top-header__logo mr-auto" alt="..." />
        <div className="d-flex align-items-center fixed-top-header__button">
          <Link to="/">
            <h4 className="fixed-top-header__text">Home</h4>
          </Link>
        </div>
        <div className="dropdown">
          <div
            className="align-items-center fixed-top-header__button"
          >
            <Link
              className="d-flex align-items-center no-hover-text-decoration"
              to="/services"
              onMouseOver={() => document.getElementById('fixed-top-services-dropdown').classList.add('dropdown-open')}
              onMouseLeave={() => document.getElementById('fixed-top-services-dropdown').classList.remove('dropdown-open')}
              onFocus={() => document.getElementById('fixed-top-services-dropdown').classList.add('dropdown-open')}
              onBlur={() => document.getElementById('fixed-top-services-dropdown').classList.remove('dropdown-open')}
            >
              <h4 className="fixed-top-header__text">Services</h4>
              <img className="arrow-down" src={arrowDown} alt="arrow-down" />
            </Link>
            <div
              className="services-dropdown-top-block"
              onMouseOver={() => document.getElementById('fixed-top-services-dropdown').classList.add('dropdown-open')}
              onMouseLeave={() => document.getElementById('fixed-top-services-dropdown').classList.remove('dropdown-open')}
              onFocus={() => document.getElementById('fixed-top-services-dropdown').classList.add('dropdown-open')}
              onBlur={() => document.getElementById('fixed-top-services-dropdown').classList.remove('dropdown-open')}
            />
          </div>
          <div
            id="fixed-top-services-dropdown"
            className="dropdown-content"
          >
            <div
              className="services__items"
              onMouseOver={() => document.getElementById('fixed-top-services-dropdown').classList.add('dropdown-open')}
              onMouseLeave={() => document.getElementById('fixed-top-services-dropdown').classList.remove('dropdown-open')}
              onFocus={() => document.getElementById('fixed-top-services-dropdown').classList.add('dropdown-open')}
              onBlur={() => document.getElementById('fixed-top-services-dropdown').classList.remove('dropdown-open')}
            >
              {ServicesData.map((service) => (
                <Link key={service.link} to={`/services/${service.link}`}>
                  <div className="services__service">
                    <div className="services__icon-wrapper">
                      <img src={service.url} alt={service.name} />
                    </div>
                    <div className="services__service-description-wrapper">
                      <h4>{service.name}</h4>
                      <p className="services__service-description">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center fixed-top-header__button">
          <Link to="/technologies">
            <h4 className="fixed-top-header__text">Technology</h4>
          </Link>
        </div>
        <div className="d-flex align-items-center fixed-top-header__button">
          <Link to="/testimonial">
            <h4 className="fixed-top-header__text">Testimonial</h4>
          </Link>
        </div>
        <div className="fixed-top-header__contact-wrapper d-flex align-items-center justify-content-center">
          <Link to="/contact-us" className="d-flex align-items-center content">
            <h4 className="fixed-top-header__contact-title fixed-top-header__text">
              Contact us
            </h4>
            <img
              className="fixed-top-header__arrow-right"
              src={arrowRight}
              alt="GO-contact-us"
            />
          </Link>
        </div>
      </header>
    );
  }
}

export default FixedTopHeader;
