import React from 'react';
import Helmet from 'react-helmet';
import Loadable from 'react-loadable';

import Explore from '../../components/Explore';

import Quote from './components/Quote';
import Missions from './components/Mission';
import LoadingScreen from '../../components/LoadingScreen';

import stickyTrigger from '../../utils/stickyTrigger';
import useScrollDirection from '../../utils/hooks/useScrollDirection';

import { HEADER_DESCRIPTION } from '../../constant';

import companyLogo from '../../assets/images/GoldenOwlLogo.png';
import './index.sass';

const Loading = ({ pastDelay, error }) => (!pastDelay && error ? null : <LoadingScreen />);

const SubHeader = Loadable({ loader: () => import('../../components/SubHeader'), loading: Loading, delay: 1300 });
const MainHeader = Loadable({ loader: () => import('../../components/MainHeader'), loading: Loading, delay: 1300 });
const FixedTopHeader = Loadable({ loader: () => import('../../components/FixedTopHeader'), loading: Loading, delay: 1300 });
const Feedback = Loadable({ loader: () => import('./components/Feedback'), loading: Loading, delay: 1300 });
const Archieves = Loadable({ loader: () => import('./components/Archieves'), loading: Loading, delay: 1300 });
const Introduction = Loadable({ loader: () => import('./components/Introduction'), loading: Loading, delay: 1300 });
const Technologies = Loadable({ loader: () => import('./components/Technologies'), loading: Loading, delay: 1300 });
const CompanyQuality = Loadable({ loader: () => import('./components/CompanyQualities'), loading: Loading, delay: 1300 });
const IntroVideo = Loadable({ loader: () => import('./components/IntroVideo'), loading: Loading, delay: 1300 });
const Contact = Loadable({ loader: () => import('../../components/Contact'), loading: Loading, delay: 1300 });
const Partners = Loadable({ loader: () => import('../../components/Partners'), loading: Loading, delay: 1300 });
const Footer = Loadable({ loader: () => import('../../components/Footer'), loading: Loading, delay: 1300 });
const OurArchievements = Loadable({ loader: () => import('./components/OurArchievements'), loading: Loading, delay: 1300 });

const Home = () => {
  const scrollDirection = useScrollDirection();

  window.onscroll = () => stickyTrigger(scrollDirection);

  return (
    <section className="home">
      <Helmet>
        <title>Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={HEADER_DESCRIPTION} name="description" />
        <meta content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native" property="og:title" />
        <meta content={HEADER_DESCRIPTION} property="og:description" />
        <meta content={companyLogo} property="og:image" />
        <meta name="csrf-param" content="authenticity_token" />
        <meta name="csrf-token" content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg==" />
      </Helmet>
      <div className="container-fluid no-padding">
        <FixedTopHeader />
        <MainHeader />
        <SubHeader />
        <Quote />
        <Missions />
        <Introduction />
        <CompanyQuality />
        <OurArchievements />
        <IntroVideo />
        <Archieves />
        <Feedback />
        <hr style={{
          height: 0.8,
          margin: '0 auto',
          backgroundColor: '#DCDCDC',
          border: 'none',
        }}
        />
        <Partners />
        <Technologies />
        <Contact />
        <Explore />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
