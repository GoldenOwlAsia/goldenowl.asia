import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import PortfolioHeader from '../../components/PortfolioHeader';
import PortfolioInteresting from '../../components/PortfolioInteresting';

import randomProjects from '../../utils/portfolioTabContent';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import aosItemDirection from '../../utils/aosItemDirection';

import { HEADER_DESCRIPTION } from '../../constant';

import companyLogo from '../../assets/images/GoldenOwlLogo.png';
import './index.sass';

const PortfolioSubPage = ({ content }) => {
  const [prevProject, setPrevProject] = useLocalStorage('prevProject', 'none');

  // exclude current & previous
  const filteredRandomProject = randomProjects.filter(
    (p) => !p.content.includes(content.key) && !p.content.includes(prevProject),
  );

  const randomProject = filteredRandomProject[
    Math.floor(Math.random() * filteredRandomProject.length)
  ];

  const randomProjectText = randomProject.content.split(' – ');
  const randomProjectUrl = randomProject.url;
  const randomProjectThumb = randomProject.thumb;

  const nextProjectBg = randomProjectThumb ? {
    backgroundImage: `url(${randomProjectThumb})`,
  } : {
    backgroundColor: '#000',
  };

  return (
    <section>
      <Helmet>
        <title>{`${content.key} - Golden Owl`}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="N_qR6-efA-BOE-NPwuBG69fmJ-UG_wDHG34i4ixSlug"
          name="google-site-verification"
        />
        <meta content={HEADER_DESCRIPTION} name="description" />
        <meta
          content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native"
          property="og:title"
        />
        <meta content={HEADER_DESCRIPTION} property="og:description" />
        <meta content={companyLogo} property="og:image" />
        <meta name="csrf-param" content="authenticity_token" />
        <meta
          name="csrf-token"
          content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg=="
        />
      </Helmet>
      <div className="container-fluid no-padding">
        <PortfolioHeader />
        <section className="portfolio-details">
          <h1 data-aos="fade-right">{content.key}</h1>
          {Object.keys(content.customer || {}).length !== 0
            && content.customer && (
              <div className="portfolio-details__customer">
                <p>
                  <span>Client’s Country:</span>
                  &nbsp;
                  {content.customer.country}
                </p>
                <p>
                  <span>Engineers involved in this program:</span>
                  &nbsp;
                  {content.customer.program}
                </p>
                <p>
                  <span>Timeline:</span>
                  &nbsp;
                  {content.customer.timeline}
                </p>
                <p>
                  <span>Industry:</span>
                  &nbsp;
                  {content.customer.industry}
                </p>
                {content.customer.website && (
                  <p>
                    <span>Website:</span>
                    &nbsp;
                    <a
                      href={content.customer.website}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {content.customer.website}
                    </a>
                  </p>
                )}
              </div>
          )}
          <div className="row">
            <div
              className="col-12 portfolio-details__cover"
              data-aos="fade-left"
            >
              <img
                src={content.cover}
                alt={`${content.key} cover`}
                loading="eager"
              />
            </div>
            <div className="col-12 portfolio-details__first-paragraph d-flex align-items-start">
              <h3
                className="portfolio-details__item-title"
                data-aos="fade-right"
              >
                Overview
              </h3>
              <p
                className="portfolio-details__item-content"
                data-aos="fade-left"
              >
                {content.overview}
              </p>
            </div>
            {content.challenges && content.challenges.length > 0 && (
              <div className="col-12 portfolio-details__second-paragraph d-flex align-items-start">
                <h3
                  className="portfolio-details__item-title"
                  data-aos="fade-right"
                >
                  Challenges
                </h3>
                <ul
                  className="portfolio-details__item-content no-margin-bottom"
                  data-aos="fade-left"
                >
                  {content.challenges.map((item) => (
                    <li key={item} className="d-flex">
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="col-12 portfolio-details__second-paragraph d-flex align-items-start">
              <h3
                className="portfolio-details__item-title"
                data-aos="fade-right"
              >
                Technology solutions
              </h3>
              {typeof content.techs === 'string' ? (
                <p
                  className="portfolio-details__item-content"
                  data-aos="fade-left"
                >
                  {content.techs}
                </p>
              ) : (
                <ul
                  className="portfolio-details__item-content no-margin-bottom"
                  data-aos="fade-left"
                >
                  {content.techs.map((item) => (
                    <li key={item} className="d-flex">
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {content.img.map((image, index) => (
              <Fragment key={`${content.key}${index * -1}`}>
                {image.src && (
                  <div
                    className={`${image.col > 4 ? 'col-12' : 'col-6'} col-md-${
                      image.col
                    } portfolio-details__image`}
                    data-aos={aosItemDirection(index)}
                    data-aos-anchor-placement="top-center"
                  >
                    <img
                      src={image.src}
                      alt={`${content.key} img no.${index}`}
                      loading="lazy"
                    />
                  </div>
                )}
                {image === 'features' && content.features && (
                  <div className="col-12 portfolio-details__second-paragraph d-flex align-items-start">
                    <h3
                      className="portfolio-details__item-title"
                      data-aos="fade-right"
                    >
                      Core features
                    </h3>
                    <ul
                      className="portfolio-details__item-content no-margin-bottom"
                      data-aos="fade-left"
                    >
                      {content.features.map((item) => (
                        <li key={item} className="d-flex">
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Fragment>
            ))}
            {content.result && (
              <div className="col-12 portfolio-details__third-paragraph d-flex align-items-start">
                <h3
                  className="portfolio-details__item-title"
                  data-aos="fade-right"
                >
                  Final results
                </h3>
                <ul
                  className="portfolio-details__item-content no-margin-bottom"
                  data-aos="fade-left"
                >
                  {content.result.map((item) => (
                    <li key={item} className="d-flex">
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {content.brief && (
              <div
                className="col-md-12 portfolio-details__third-paragraph d-flex align-items-start"
                data-aos="fade-right"
              >
                {content.brief.title}
                <p
                  className="portfolio-details__item-content"
                  data-aos="fade-left"
                >
                  {content.brief.description}
                </p>
              </div>
            )}
            <div className="col-12">
              <Link
                onClick={() => {
                  setPrevProject(content.key);
                }}
                to={`/portfolio/${randomProjectUrl}`}
              >
                <div
                  style={nextProjectBg}
                  className="portfolio-details__next-project"
                  data-aos="fade-up"
                >
                  <h3>{`Up next: ${randomProjectText[0]}`}</h3>
                  <p>{randomProjectText[1]}</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <PortfolioInteresting />
      </div>
    </section>
  );
};

export default PortfolioSubPage;
