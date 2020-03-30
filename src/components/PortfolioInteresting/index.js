import React from 'react'
import './index.sass'
import { Link } from 'react-router-dom'

const PortfolioInteresting = () => (
  <section className="portfolio-interesting">
    <p className="portfolio-interesting__above-text">Interesting our work?</p>
    <p className="portfolio-interesting__below-text">
      <Link to="/contact-us">
          Let’s find a time to meet
      </Link>
    </p>
  </section>
)

export default PortfolioInteresting
