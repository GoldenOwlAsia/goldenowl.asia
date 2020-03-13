import React from 'react';
import present from '../../assets/images/service_description.png';
import './index.sass';

const ServicesDescription = () => (
  <section className="services-description">
    <div className="services-description__left-side">
      <h2 className="services-description__title heading-lg">Services</h2>
      <p className="services-description__text text-xl">
        We provide software solutions, mostly about website and mobile applications for a wide variety of fields, from finance to commerce and so on. We are proud of being very selective and have one of the best full-stacked developer training programs in Ho Chi Minh City.
      </p>
    </div>
    <div className="services-description__right-side">
      <img src={present} alt="present" />
    </div>
  </section>
);

export default ServicesDescription;