import React from 'react';
import { Link } from 'react-router-dom';

import ArrowRight from '../ArrowRight';

import laptop from '../../assets/images/RefCandy.png';
import './index.sass';

const Explore = () => (
  <section className="explore">
    <div className="explore__card">
      <div className="explore__top-content">
        <h6>REFERRAL CANDY | FEATURES CASE STUDY</h6>
        <Link className="explore__case-study" to="/portfolio/referral-candy">
          <h6>VIEW ALL CASE STUDY</h6>
          <ArrowRight className="explore__arrow" />
        </Link>
      </div>
      {/* <p className="explore__description">Get your favorite training course</p> */}
      <div className="explore__image-wrapper">
        <a href="/portfolio/referral-candy">
          <img className="explore__image" src={laptop} alt="computer" loading="lazy" />
        </a>
      </div>
    </div>
  </section>
);

export default Explore;
