import React from 'react';
import SlideCarousel from '../SlideCarousel/index';
import partnersLogo from '../../utils/PartnersLogo';
import './index.sass';

function Partners() {
  return (
    <section className="partners">
      <h3 className="partners__title heading-base">
        We partner with the world's best
      </h3>
      <SlideCarousel content={partnersLogo} />
    </section>
  );
}

export default Partners;
