import React from 'react';
import { Link } from 'react-router-dom';

import testimonials from '../../../../utils/testimonials';
import objectToArray from '../../../../utils/objectToArray';
import useMobileWidth from '../../../../utils/hooks/useMobileWidth';

import './index.sass';

const TestimonialsList = () => {
  const isMobile = useMobileWidth();

  const mobileView = () => objectToArray(testimonials).map((item) => (
    <div key={item.key} className="row testimonials-list__item">
      <div className="col-12" data-aos="fade-right">
        <img className="w-100" src={item.avatar} alt="some pic" />
      </div>
      <div className="ml-auto col-12" data-aos="fade-left">
        <div className="testimonials-list__item-text">
          <h4>
            {item.key}
            :
            {' '}
            {item.main}
          </h4>
          <p>{item.details}</p>
          <img className="logo" src={item.companyLogo} alt="logo" />
          <p className="title">{item.title}</p>
          <Link to={`/portfolio/${item.url ? item.url : ''}`}>
            <p className="case-study d-flex align-items-center">
              VIEW CASE STUDY
              <div className="case-study__arrow" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  ));

  const defaultView = () => objectToArray(testimonials).map((item, index) => (index % 2 === 0 ? (
    <div key={item.key} className="row testimonials-list__item">
      <div className="col-md-6" data-aos="fade-right">
        <div>
          <img className="w-100" src={item.avatar} alt="some pic" />
        </div>
      </div>
      <div className="ml-auto col-md-6" data-aos="fade-left">
        <div className="testimonials-list__item-text">
          <h4>
            {item.key}
            :
            {' '}
            {item.main}
          </h4>
          <p>{item.details}</p>
          {/* <img className="logo" src={item.companyLogo} alt="logo" /> */}
          <p className="title">{item.title}</p>
          <Link to={`/portfolio/${item.url ? item.url : ''}`}>
            <p className="case-study d-flex align-items-center">
              VIEW CASE STUDY
              <div className="case-study__arrow" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div key={item.key} className="row testimonials-list__item">
      <div className="ml-auto col-md-6" data-aos="fade-right">
        <div>
          <h4>
            {item.key}
            :
            {' '}
            {item.main}
          </h4>
          <p>{item.details}</p>
          {/* <img className="logo" src={item.companyLogo} alt="logo" /> */}
          <p className="title">{item.title}</p>
          <Link to={`/portfolio/${item.url ? item.url : ''}`}>
            <p className="case-study d-flex align-items-center">
              VIEW CASE STUDY
              <div className="case-study__arrow" />
            </p>
          </Link>
        </div>
      </div>
      <div className="col-md-6 d-flex justify-content-end" data-aos="fade-left">
        <div>
          <img className="w-100" src={item.avatar} alt="some pic" />
        </div>
      </div>
    </div>
  )));

  return (
    <section className="testimonials-list">
      <h3 className="text-center">Let’s see what our clients recommend about Golden Owl</h3>
      {isMobile ? mobileView() : defaultView()}
    </section>
  );
};

export default TestimonialsList;
