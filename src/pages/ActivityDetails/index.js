import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import MainHeader from '../../components/MainHeader';
import SubHeader from '../../components/SubHeader';
import FixedTopHeader from '../../components/FixedTopHeader';
import BreadCrumb from '../../components/BreadCrumb';
import FixedTopBreadCrumb from '../../components/FixedTopBreadCrumb';
import Footer from '../../components/Footer';

import stickyTrigger from '../../utils/stickyTrigger';
import useScrollDirection from '../../utils/hooks/useScrollDirection';

import { HEADER_DESCRIPTION } from '../../constant';

import './index.sass';

const ActivityDetails = () => {
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  window.onscroll = () => {
    stickyTrigger(scrollDirection);
  };

  return (
    <section className="activity-details">
      <Helmet>
        <title>Activity - Golden Owl</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content={HEADER_DESCRIPTION}
          name="description"
        />
        <meta
          content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native"
          property="og:title"
        />
        <meta
          content={HEADER_DESCRIPTION}
          property="og:description"
        />
        <meta
          content="http://www.goldenowl.asia/assets/background-home.jpg"
          property="og:image"
        />
        <meta name="csrf-param" content="authenticity_token" />
        <meta
          name="csrf-token"
          content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg=="
        />
      </Helmet>
      <div ref={pageContent} className="container-fluid no-padding">
        <FixedTopHeader />
        <FixedTopBreadCrumb pageContent={pageContent}>
          <Link to="/activity">Activity</Link>
        </FixedTopBreadCrumb>
        <MainHeader />
        <SubHeader />
        <BreadCrumb pageContent={pageContent}>
          <Link to="/activity">Activity</Link>
        </BreadCrumb>
        <Footer />
      </div>
    </section>
  );
};

export default ActivityDetails;
