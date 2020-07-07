import React, { createRef } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import MainHeader from "../../components/MainHeader";
import BreadCrumb from "../../components/BreadCrumb";
import FixedTopHeader from "../../components/FixedTopHeader";
import FixedTopBreadCrumb from "../../components/FixedTopBreadCrumb";

import stickyTrigger, { stickyTOCTrigger } from "../../utils/stickyTrigger";
import useMobileWidth from "../../utils/hooks/useMobileWidth";
import useScrollDirection from "../../utils/hooks/useScrollDirection";

import companyLogo from "../../assets/images/GoldenOwlLogo.png";
import "./index.sass";
import contentRender from "./mockPanelsRender"


const FAQ = () => {
  const isMobile = useMobileWidth();

  const pageContent = createRef();
  const scrollDirection = useScrollDirection();
  let updateMenuActiveStatusFunc = () => {
    const fixedTopElement = document.getElementById("fixed-top-menu") ||  document.getElementById("fixed-top-breadcrumb");
    const entries = document.querySelectorAll('section[id*="content-"]');
    let firstIdx = -1;
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const id = entry.getAttribute('id');
      const tocItem = document.querySelector(`nav li a[href="#${id}"]`);
      tocItem && tocItem.parentElement.classList.remove('active');
      const elemHeight = entry.clientHeight;
      if ((entry.getBoundingClientRect().top + window.pageYOffset + elemHeight - fixedTopElement.clientHeight) > window.pageYOffset && firstIdx === -1) {
        firstIdx = i;
        tocItem && tocItem.parentElement.classList.add('active');
      }
    };
  }

  // let updateMenuStatusActiveDebounce = null;

  const tableOfContentQuery = () => {
    // Debounce
    // if (updateMenuStatusActiveDebounce) {
    //   clearTimeout(updateMenuStatusActiveDebounce);
    // }
    // updateMenuStatusActiveDebounce = setTimeout(updateMenuActiveStatusFunc, 100);
    updateMenuActiveStatusFunc();    
  }
  
  window.onscroll = () => {
    stickyTrigger(scrollDirection);
    stickyTOCTrigger(isMobile);
    !isMobile && tableOfContentQuery();
  };

  return (
    <section className="faq">
      <Helmet>
        <title>FAQ - Golden Owl</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="N_qR6-efA-BOE-NPwuBG69fmJ-UG_wDHG34i4ixSlug"
          name="google-site-verification"
        />
        <meta
          content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more."
          name="description"
        />
        <meta
          content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native"
          property="og:title"
        />
        <meta
          content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more."
          property="og:description"
        />
        <meta content={companyLogo} property="og:image" />
        <meta name="csrf-param" content="authenticity_token" />
        <meta
          name="csrf-token"
          content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg=="
        />
      </Helmet>
      <div ref={pageContent} className="container-fluid no-padding">
        <FixedTopHeader />
        <FixedTopBreadCrumb pageContent={pageContent}>
          <Link to="/faq">FAQ</Link>
        </FixedTopBreadCrumb>
        <MainHeader />
        <SubHeader />
        <BreadCrumb pageContent={pageContent}>
          <Link to="/faq">FAQ</Link>
        </BreadCrumb>
        <section className="faq__opening">
          <h1>Frequently Asked Question</h1>
          <p>Thoughts, stories and ideas.</p>
        </section>
        <section className="faq__content">
          <div className="row">
            {isMobile || <div id="toc-container" className="col-md-4 d-flex flex-column">
              <div id="toc-sticky-top-trigger" className="faq__toc-sticky-top-trigger align-self-start" />
              <div id="toc" className="faq__toc-wrapper mb-auto">
                <nav className="faq__toc">
                  <h4 className="faq__toc-title">Contents</h4>
                  <ol>
                  {[...new Array(6).keys()].map(item => <li><a className="faq__toc-item" href={`#content-${item + 1}`}>{`Content ${item + 1}`}</a></li>)}
                  </ol>
                </nav>
              </div>
              <div id="toc-sticky-bot-trigger" className="faq__toc-sticky-bot-trigger align-self-end"/>
            </div>}
            <div className="col-md-8">
              <div className="faq__content-body">{contentRender()}</div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default FAQ;
