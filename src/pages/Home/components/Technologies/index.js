import React from 'react';
import { Link } from 'react-router-dom';

import technologiesLogo from '../../../../utils/technologiesLogo';
import useMobileWidth from '../../../../utils/hooks/useMobileWidth';
import Slide from '../Slide';

import './index.sass';

const Technologies = () => {
  const isMobile = useMobileWidth();

  return (
    <section className="technologies" data-aos="fade-left">
      <h3 className="technologies__title heading-base">Technologies we use</h3>
      <Slide />
    </section>
  );
};

export default Technologies;
