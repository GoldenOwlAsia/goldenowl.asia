import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BlogSubcriptionDialog from '../BlogSubcriptionDialog';

import logo from '../../assets/images/go.png';
import desktopLogo from '../../assets/images/golden_owl.svg';
import companyName from '../../assets/images/golden_owl_text.png';
import useMobileWidth from '../../utils/hooks/useMobileWidth';

import './index.sass';

const BlogHeader = () => {
  const isMobile = useMobileWidth();
  const [dialogStatus, setDialogStatus] = useState(false);

  const openDialog = () => setDialogStatus(true);

  const closeDialog = () => setDialogStatus(false);

  return isMobile ? (
    <header className="blog-header d-flex align-items-center">
      <div className="d-flex">
        <img className="blog-header__logo" src={logo} alt="go-logo" />
        <div className="blog-header__logo-text flex-column">
          <Link to="/">
            <img src={companyName} alt="go" />
          </Link>
          <Link to="/blog">
            <p className="mt-auto">Blog</p>
          </Link>

        </div>
      </div>
      <button type="button" onClick={openDialog} className="blog-header__subscribe-button ml-auto">
        Subscribe to our blog
      </button>
      <BlogSubcriptionDialog show={dialogStatus} onHide={closeDialog} />
    </header>
  ) : (
    <header className="blog-header d-flex align-items-center">
      <div className="d-flex align-items-center">
        <Link to="/">
          <img src={desktopLogo} className="blog-header__logo d-block" alt="GO-logo" />
        </Link>
        <Link to="/blog">
          <p className="">Blog</p>
        </Link>
      </div>
      <button type="button" onClick={openDialog} className="blog-header__subscribe-button ml-auto">
        Subscribe to our blog
      </button>
      <BlogSubcriptionDialog show={dialogStatus} onHide={closeDialog} />
    </header>
  );
};

export default BlogHeader;
