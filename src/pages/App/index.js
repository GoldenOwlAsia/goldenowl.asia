import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import TechnologyContainer from '../Technology';
import Services from '../Services'
import './index.sass'
import singleServiceDetails from '../../utils/SingleServiceDetails'
import objectToArray from '../../utils/objectToArray'
import SingleService from '../SingleService'
import Testimonials from '../Testimonials';

const App = () => (
  <BrowserRouter>
    <section className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route path="/technologies" component={TechnologyContainer} />
      <Route path="/testimonials" component={Testimonials} />
      {
        objectToArray(singleServiceDetails).map((service) => (
          <Route
            exact
            path={`/services/${service.url}`}
            component={() => <SingleService content={service} />}
          />
        ))
      }
      <Route exact path="/services" component={Services} />
    </section>
  </BrowserRouter>
)

export default App
