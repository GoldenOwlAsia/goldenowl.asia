import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Loadable from 'react-loadable';

import LoadingScreen from '../components/LoadingScreen';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import objectToArray from '../utils/objectToArray';
import portfolioDetails from '../utils/portfolioDetails';
import singleServiceDetails from '../utils/singleServiceDetails';

const Loading = ({ pastDelay, error }) => (!pastDelay && error ? <NotFound /> : <LoadingScreen />);

const About = Loadable({
  loader: () => import('../pages/About'),
  loading: Loading,
  delay: 1500,
});
const Contact = Loadable({
  loader: () => import('../pages/Contact'),
  loading: Loading,
  delay: 1500,
});
const Services = Loadable({
  loader: () => import('../pages/Services'),
  loading: Loading,
  delay: 1500,
});
const ServicesSubPage = Loadable({
  loader: () => import('../pages/ServicesSubPage'),
  loading: Loading,
  delay: 1500,
});
const Technology = Loadable({
  loader: () => import('../pages/Technology'),
  loading: Loading,
  delay: 1500,
});
const PortfolioSubPage = Loadable({
  loader: () => import('../pages/PortfolioSubPage'),
  loading: Loading,
  delay: 1500,
});
const Testimonials = Loadable({
  loader: () => import('../pages/Testimonials'),
  loading: Loading,
  delay: 1500,
});
const Portfolio = Loadable({
  loader: () => import('../pages/Portfolio'),
  loading: Loading,
  delay: 1500,
});
const Blog = Loadable({
  loader: () => import('../pages/Blog'),
  loading: Loading,
  delay: 1500,
});
const BlogDetails = Loadable({
  loader: () => import('../pages/BlogDetails'),
  loading: Loading,
  delay: 1500,
});
const Career = Loadable({
  loader: () => import('../pages/Career'),
  loading: Loading,
  delay: 1500,
});
const CareerDetails = Loadable({
  loader: () => import('../pages/CareerDetails'),
  loading: Loading,
  delay: 1500,
});
const FAQ = Loadable({
  loader: () => import('../pages/FAQ'),
  loading: Loading,
  delay: 1500,
});
const Activity = Loadable({
  loader: () => import('../pages/Activity'),
  loading: Loading,
  delay: 1500,
});
const ActivityDetails = Loadable({
  loader: () => import('../pages/ActivityDetails'),
  loading: Loading,
  delay: 1500,
});

const AppRoutes = () => {
  const location = useLocation();
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames="fade"
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/technologies" component={Technology} />
          <Route exact path="/testimonial" component={Testimonials} />
          <Route exact path="/portfolio" component={Portfolio} />
          {objectToArray(portfolioDetails).map((portfolio) => (
            <Route
              exact
              key={portfolio.key}
              path={`/portfolio/${portfolio.url}`}
              component={() => <PortfolioSubPage content={portfolio} />}
            />
          ))}
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/details" component={BlogDetails} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/services" component={Services} />
          {objectToArray(singleServiceDetails).map((service) => (
            <Route
              exact
              key={service.key}
              path={`/services/${service.url}`}
              component={() => <ServicesSubPage content={service} />}
            />
          ))}
          <Route exact path="/careers" component={Career} />
          <Route path="/careers/details" component={CareerDetails} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/activity" component={Activity} />
          <Route path="/activity/details" component={ActivityDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRoutes;
