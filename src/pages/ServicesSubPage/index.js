import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import MainHeader from 'components/MainHeader'
import SubHeader from 'components/SubHeader'
import BreadCrumb from 'components/BreadCrumb'
import Footer from 'components/Footer'
import objectToArray from 'utils/objectToArray'
import useMobileWidth from 'utils/hooks/useMobileWidth'
import capitalizeWords from 'utils/capitalizeWords'

import coverPlaceholder from 'assets/images/service/cover-min.png'
import mCoverPlaceholder from 'assets/images/service/mCover-min.png'

import './index.sass'

const ServicesSubPage = ({ content }) => {
  const isMobile = useMobileWidth()
  return (
  <section className="service">
    <Helmet>
      <title>{`${capitalizeWords(content.key)} - Golden Owl`}</title>
    </Helmet>
    <div className="container-fluid no-padding">
      <MainHeader />
      <SubHeader />
      <BreadCrumb>
        <Link to="/services">Services</Link>
        <span>/</span>
        <p>{content.key}</p>
      </BreadCrumb>
      <section className="service__first-content">
        <h1>{content.key}</h1>
        <p>{content.first.content}</p>
      </section>
      <section className="cover">
        <div id="white-background" />
        <div className="image-wrapper">
          <img src={isMobile ? content.mobileCover : content.cover} alt={`GO-${content.key}-cover`} />
        </div>
        <div className="invisible placeholder-wrapper">
          <img src={isMobile ? mCoverPlaceholder : coverPlaceholder} alt={`GO-${content.key}-cover`} />
        </div>
      </section>      
      <section className="service__second-content">
        <h2>{content.second.title}</h2>
        <p>{content.second.content}</p>
      </section>
      <section className="service__slogan">
        <h2>Simple and powerful</h2>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="service__slogan-item">
              <h3>{content.third.left.title}</h3>
              <p>{content.third.left.content}</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="service__slogan-item">
              <h3>{content.third.center.title}</h3>
              <p>{content.third.center.content}</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="service__slogan-item no-border">
              <h3>{content.third.right.title}</h3>
              <p>{content.third.right.content}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="service__third-content">
        <div id="rectangle" className="service__yellow-rectangle d-flex ">
          <div className="service__yellow-rectangle__text">
            <h3>{content.fourth.title}</h3>
            <p>{content.fourth.content}</p>
          </div>
          <div className="service__logos-wrapper">
            <div className="d-flex flex-wrap">
              {content.fourth.logos.map((image) => (
                <img
                  key={image.name}
                  src={image.url}
                  alt={image.name}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
        <div id="dashed-border" className="service__dotted-square d-flex">
          {/* append data */}
          <div id="inside-border" className="service__yellow-rectangle d-flex invisible">
            <div className="service__yellow-rectangle__text">
              <h3>{content.fourth.title}</h3>
              <p>{content.fourth.content}</p>
            </div>
            <div className="service__logos-wrapper">
              <div className="d-flex flex-wrap">
                {content.fourth.logos.map((image) => (
                  <img
                      key={image.name}
                      src={image.url}
                      alt={image.name}
                      loading="lazy"
                    />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service__other-services-container">
        <h3 className="service__other-services-title">
            Other services
        </h3>
        <div className="row">
          {objectToArray(content.navs).map((image) => (
            <div
              key={image.title}
              className="col-12 col-md-6 service__other-service-wrapper"
            >
              <Link
                className="service__other-service"
                to={`/services/${image.url}`}
              >
                <div className="col-4 col-md-3">
                  <img src={image.imgUrl} alt={image.title} />
                </div>
                <div className="col-8 col-md-9">
                  <h4 className="">{image.title}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  </section>
)}

export default ServicesSubPage