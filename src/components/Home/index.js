import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../assets/images/home-icon.png';
import './index.sass';

const Home = () => {
  return (
    <section className="home-back">
      <Link to="/">
        <div>
          <img src={home} alt="home" />
          <span>/</span>
          <p className="home-back__text">About us</p>
        </div>
      </Link>
    </section>
  );
}

export default Home;