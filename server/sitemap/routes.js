import React from 'react';
import { Switch, Route } from 'react-router-dom';

import portfolioDetails from './utils/portfolioDetails';
import singleServiceDetails from './utils/singleServiceDetails';
import objectToArray from '../../src/utils/objectToArray';

import listBlogSlug from './utils/blogs.json';

export default (
  <Switch>
    <Route path="/" />
    <Route path="/about-us" />
    <Route path="/technologies" />
    <Route path="/testimonial" />
    <Route path="/portfolio" />
    {objectToArray(portfolioDetails).map((portfolio) => (
      <Route key={portfolio.key} path={`/portfolio/${portfolio.url}`} />
    ))}
    <Route path="/blog" />
    {listBlogSlug.map((blog) => (
      <Route key={blog.key} path={`/blogs/details/${blog.url}`} />
    ))}
    <Route path="/contact-us" />
    <Route path="/services" />
    {objectToArray(singleServiceDetails).map((service) => (
      <Route key={service.key} path={`/services/${service.url}`} />
    ))}
    <Route path="/careers" />
    <Route path="/faq" />
    <Route exact path="/activity" />
  </Switch>
);
