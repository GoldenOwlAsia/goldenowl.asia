/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, createRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import parse from 'html-react-parser';
import format from 'date-fns/format';
import compareDesc from 'date-fns/compareDesc';

import BreadCrumb from '../../components/BreadCrumb';
import FixedTopBreadCrumb from '../../components/FixedTopBreadCrumb';
import Footer from '../../components/Footer';
import LoadDataComponent from '../../components/LoadDataComponent';
import BlogHeader from '../../components/BlogHeader';
import Categories from './components/Categories/index';
import Search from './components/Search/index';
import LoadingScreen from '../../components/LoadingScreen';

import readTimeCalculator from '../../utils/readTimeCalculator';
import replaceAllString from '../../utils/replaceAllString';
import aosItemDirection from '../../utils/aosItemDirection';
import stickyTrigger from '../../utils/stickyTrigger';
import useScrollDirection from '../../utils/hooks/useScrollDirection';

import {
  LOADING_STATUS,
  LOADED_STATUS,
  NO_RESULT_STATUS,
  HEADER_DESCRIPTION,
  ALL_BLOGS,
  SEARCH_BLOG,
  FILTER_BLOG,
} from '../../constant';

import {
  getAllBlogs,
  searchListBlog,
  getListBlogCategory,
  getListBlogByCategory,
} from '../../api/blogs';

import './index.sass';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [typeGet, setTypeGet] = useState(ALL_BLOGS);

  const [currentCategory, setCurrentCategory] = useState('all');
  const [listCategory, setListCategory] = useState({});

  const [loadStatus, setLoadStatus] = useState(LOADING_STATUS);

  const [valueSearch, setValueSearch] = useState('');

  const formatListBlogCategory = (data) => Object.fromEntries(
    data.map((elm) => [
      elm[0],
      {
        id: elm[0],
        name: elm[1],
      },
    ]),
  );

  const getNextPageFromLink = (link) => link.split('page=')[1];

  const handleCallApiGetListBlog = (page = 1) => {
    getAllBlogs(page)
      .then((res) => {
        const { data } = res.data;
        if (data) {
          setBlogs(
            [...data.data].sort((a, b) => compareDesc(
              new Date(a.attributes.created_at),
              new Date(b.attributes.created_at),
            )),
          );
          setNextPage(
            data.links.next_page_url
              ? getNextPageFromLink(data.links.next_page_url)
              : null,
          );
        }

        if (data.data.length) {
          setTimeout(() => setLoadStatus(LOADED_STATUS), 500);
        } else setTimeout(() => setLoadStatus(NO_RESULT_STATUS), 1000);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => setLoadStatus(NO_RESULT_STATUS), 1000);
      });
  };

  const handleCallApiGetListBlogCategory = () => {
    getListBlogCategory()
      .then((res) => {
        const { data } = res.data;
        if (data) {
          setListCategory(formatListBlogCategory(data.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCallApiGetListBlogByCategory = (id, page = 1) => {
    getListBlogByCategory(id, page)
      .then((res) => {
        const { data } = res.data;
        if (data) {
          setBlogs(
            [...data.data].sort((a, b) => compareDesc(
              new Date(a.attributes.created_at),
              new Date(b.attributes.created_at),
            )),
          );
          setNextPage(
            data.links.next_page_url
              ? getNextPageFromLink(data.links.next_page_url)
              : null,
          );
        }

        if (data.data.length) {
          setTimeout(() => setLoadStatus(LOADED_STATUS), 500);
        } else setTimeout(() => setLoadStatus(NO_RESULT_STATUS), 1000);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => setLoadStatus(NO_RESULT_STATUS), 1000);
      });
  };

  const handleCallApiSearchListBlog = (value, page = 1) => {
    searchListBlog(value, page)
      .then((res) => {
        const { data } = res.data;
        if (data) {
          setBlogs(
            [...data.data].sort((a, b) => compareDesc(
              new Date(a.attributes.created_at),
              new Date(b.attributes.created_at),
            )),
          );
          setNextPage(
            data.links.next_page_url
              ? getNextPageFromLink(data.links.next_page_url)
              : null,
          );
        }

        if (data.data.length) {
          setTimeout(() => setLoadStatus(LOADED_STATUS), 500);
        } else setTimeout(() => setLoadStatus(NO_RESULT_STATUS), 1000);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => setLoadStatus(NO_RESULT_STATUS), 1000);
      });
  };

  const handleLoadMoreBlog = () => {
    switch (typeGet) {
      case FILTER_BLOG:
        getListBlogByCategory(currentCategory, nextPage)
          .then((res) => {
            const { data } = res.data;
            if (data) {
              setBlogs([
                ...blogs,
                ...[...data.data].sort((a, b) => compareDesc(
                  new Date(a.attributes.created_at),
                  new Date(b.attributes.created_at),
                )),
              ]);
              setNextPage(
                data.links.next_page_url
                  ? getNextPageFromLink(data.links.next_page_url)
                  : null,
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      case SEARCH_BLOG:
        searchListBlog(valueSearch, nextPage)
          .then((res) => {
            const { data } = res.data;
            if (data) {
              setBlogs([
                ...blogs,
                ...[...data.data].sort((a, b) => compareDesc(
                  new Date(a.attributes.created_at),
                  new Date(b.attributes.created_at),
                )),
              ]);
              setNextPage(
                data.links.next_page_url
                  ? getNextPageFromLink(data.links.next_page_url)
                  : null,
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      default:
        getAllBlogs(nextPage)
          .then((res) => {
            const { data } = res.data;
            if (data) {
              setBlogs([
                ...blogs,
                ...[...data.data].sort((a, b) => compareDesc(
                  new Date(a.attributes.created_at),
                  new Date(b.attributes.created_at),
                )),
              ]);
              setNextPage(
                data.links.next_page_url
                  ? getNextPageFromLink(data.links.next_page_url)
                  : null,
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
        break;
    }
  };

  useEffect(() => {
    handleCallApiGetListBlog();
  }, []);

  useEffect(() => {
    handleCallApiGetListBlogCategory();
  }, []);

  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  window.onscroll = () => {
    stickyTrigger(scrollDirection);
  };

  const handleChangeSearch = (e) => {
    const { value } = e.target;
    setValueSearch(value);
  };

  const handlePressKeySearch = (e) => {
    if (e.key === 'Enter') {
      setLoadStatus(LOADING_STATUS);

      setCurrentCategory('all');
      if (valueSearch !== '') {
        setTypeGet(SEARCH_BLOG);
        handleCallApiSearchListBlog(valueSearch);
      } else {
        setTypeGet(ALL_BLOGS);
        handleCallApiGetListBlog();
      }
    }
  };

  const handleClearSearch = () => {
    setLoadStatus(LOADING_STATUS);
    setTypeGet(ALL_BLOGS);
    setValueSearch('');
    handleCallApiGetListBlog();
  };

  const handleChangeBlogCategory = (id) => {
    if (currentCategory !== id) {
      setCurrentCategory(id);
      setValueSearch('');
      setLoadStatus(LOADING_STATUS);
      setTypeGet(FILTER_BLOG);
      if (id !== 'all') {
        handleCallApiGetListBlogByCategory(id);
      } else {
        handleCallApiGetListBlog();
      }
    }
  };

  const blogRender = () => blogs && (
  <InfiniteScroll
    dataLength={blogs.length}
    next={handleLoadMoreBlog}
    hasMore={!!nextPage}
    loader={<LoadingScreen />}
    style={{ overflow: 'hidden' }}
  >
    <div className="row">
      {blogs.map((blog, index) => {
        switch (index % 6) {
          case 0:
            return (
              <div key={blog.attributes.title} className="col-md-12">
                <div className="row blogs__item">
                  <div
                    className="col-12 col-md-8 d-block"
                    data-aos="fade-right"
                  >
                    <Link
                      exact
                      to={`/blog/details/${blog.attributes.slug}`}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${blog.attributes.image})`,
                        }}
                        className="blogs__item-image big"
                      />
                    </Link>
                  </div>
                  <div className="col-md-4 wide-blog" data-aos="fade-left">
                    <div className="category d-flex">
                      <p className="text-uppercase">{blog.type}</p>
                      <p className="text-uppercase">
                        {format(
                          new Date(blog.attributes.created_at),
                          'MMM d, y',
                        )}
                      </p>
                      <p className="text-uppercase">
                        {readTimeCalculator(blog.attributes.content)}
                      </p>
                    </div>
                    <Link
                      exact
                      to={`/blog/details/${blog.attributes.slug}`}
                    >
                      <h4>{blog.attributes.title}</h4>
                    </Link>
                    <div className="blog-content">
                      {parse(
                        replaceAllString(blog.attributes.content, {
                          '<div>': '<p>',
                          '</div>': '</p>',
                          '<del>': '<em>',
                          '</del>': '</em>',
                          '<h1>': '<em>',
                          '</h1>': '</em>',
                          '<h2>': '<em>',
                          '</h2>': '</em>',
                          '<h3>': '<em>',
                          '</h3>': '</em>',
                          '<h4>': '<em>',
                          '</h4>': '</em>',
                          '<h5>': '<em>',
                          '</h5>': '</em>',
                          '<h6>': '<em>',
                          '</h6>': '</em>',
                          '<blockquote>': '<em>',
                          '</blockquote>': '</em>',
                          '<pre>': '<em>',
                          '</pre>': '</em>',
                          '<ol>': '<em>',
                          '</ol>': '</em>',
                          '<li>': '<em>',
                          '</li>': '</em>',
                          '<ul>': '<em>',
                          '</ul>': '</em>',
                          '<strong>': '<em>',
                          '</strong>': '</em>',
                        }),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          case 1:
          case 2:
          case 3:
            return (
              <div
                key={blog.attributes.title}
                className="col-12 col-md-4"
                data-aos={aosItemDirection(index)}
              >
                <div className="blogs__item">
                  <div className="d-block">
                    <Link
                      exact
                      to={`/blog/details/${blog.attributes.slug}`}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${blog.attributes.image})`,
                        }}
                        className="blogs__item-image"
                      />
                    </Link>
                  </div>
                  <div className="d-block">
                    <div className="category category-vertical-small d-flex">
                      <p>{blog.type}</p>
                      <p>
                        {format(
                          new Date(blog.attributes.created_at),
                          'MMM d, y',
                        )}
                      </p>
                      <p>{readTimeCalculator(blog.attributes.content)}</p>
                    </div>
                    <Link
                      exact
                      to={`/blog/details/${blog.attributes.slug}`}
                    >
                      <h4 className="small-item-title">
                        {blog.attributes.title}
                      </h4>
                    </Link>
                    <div className="blog-content">
                      {parse(
                        replaceAllString(blog.attributes.content, {
                          '<div>': '<p>',
                          '</div>': '</p>',
                          '<del>': '<em>',
                          '</del>': '</em>',
                          '<h1>': '<em>',
                          '</h1>': '</em>',
                          '<h2>': '<em>',
                          '</h2>': '</em>',
                          '<h3>': '<em>',
                          '</h3>': '</em>',
                          '<h4>': '<em>',
                          '</h4>': '</em>',
                          '<h5>': '<em>',
                          '</h5>': '</em>',
                          '<h6>': '<em>',
                          '</h6>': '</em>',
                          '<blockquote>': '<em>',
                          '</blockquote>': '</em>',
                          '<pre>': '<em>',
                          '</pre>': '</em>',
                          '<ol>': '<em>',
                          '</ol>': '</em>',
                          '<li>': '<em>',
                          '</li>': '</em>',
                          '<ul>': '<em>',
                          '</ul>': '</em>',
                          '<strong>': '<em>',
                          '</strong>': '</em>',
                        }),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          case 4:
          case 5:
            return (
              <div
                key={blog.attributes.title}
                className="col-12 col-md-6"
                data-aos={aosItemDirection(index, 'fade')}
              >
                <Link exact to={`/blog/details/${blog.attributes.slug}`}>
                  <div className="blogs__item">
                    <div className="d-block">
                      <Link
                        exact
                        to={`/blog/details/${blog.attributes.slug}`}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${blog.attributes.image})`,
                          }}
                          className="blogs__item-image"
                        />
                      </Link>
                    </div>
                    <div className="d-block">
                      <div className="category category-vertical-big d-flex">
                        <p>{blog.type}</p>
                        <p>
                          {format(
                            new Date(blog.attributes.created_at),
                            'MMM d, y',
                          )}
                        </p>
                        <p>{readTimeCalculator(blog.attributes.content)}</p>
                      </div>
                      <Link
                        exact
                        to={`/blog/details/${blog.attributes.slug}`}
                      >
                        <h4 className="medium-item-title">
                          {blog.attributes.title}
                        </h4>
                      </Link>
                      <div className="blog-content medium-item-content">
                        {parse(
                          replaceAllString(blog.attributes.content, {
                            '<div>': '<p>',
                            '</div>': '</p>',
                            '<del>': '<em>',
                            '</del>': '</em>',
                            '<h1>': '<em>',
                            '</h1>': '</em>',
                            '<h2>': '<em>',
                            '</h2>': '</em>',
                            '<h3>': '<em>',
                            '</h3>': '</em>',
                            '<h4>': '<em>',
                            '</h4>': '</em>',
                            '<h5>': '<em>',
                            '</h5>': '</em>',
                            '<h6>': '<em>',
                            '</h6>': '</em>',
                            '<blockquote>': '<em>',
                            '</blockquote>': '</em>',
                            '<pre>': '<em>',
                            '</pre>': '</em>',
                            '<ol>': '<em>',
                            '</ol>': '</em>',
                            '<li>': '<em>',
                            '</li>': '</em>',
                            '<ul>': '<em>',
                            '</ul>': '</em>',
                            '<strong>': '<em>',
                            '</strong>': '</em>',
                          }),
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          default:
            break;
        }
        return <div />;
      })}
    </div>
  </InfiniteScroll>
  );

  return (
    <section className="blog">
      <Helmet>
        <title>Blog - Golden Owl</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={HEADER_DESCRIPTION} name="description" />
        <meta
          content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native"
          property="og:title"
        />
        <meta content={HEADER_DESCRIPTION} property="og:description" />
        <meta
          content="http://www.goldenowl.asia/assets/background-home.jpg"
          property="og:image"
        />
        <meta name="csrf-param" content="authenticity_token" />
        <meta
          name="csrf-token"
          content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg=="
        />
      </Helmet>
      <div ref={pageContent} className="container-fluid no-padding">
        <BlogHeader />
        <FixedTopBreadCrumb pageContent={pageContent}>
          <Link to="/blog">Blog</Link>
        </FixedTopBreadCrumb>
        <BreadCrumb pageContent={pageContent}>
          <Link to="/blog">Blog</Link>
        </BreadCrumb>

        <section className="welcome">
          <div className="welcome__wrapper">
            <h1>Welcome to the Golden Owl blog</h1>
            <p>Thoughts, stories and ideas.</p>
          </div>
        </section>
        <section>
          <div className="filter">
            <Categories
              listCategory={listCategory}
              currentCategory={currentCategory}
              onChange={handleChangeBlogCategory}
            />
            <Search
              value={valueSearch}
              onChange={handleChangeSearch}
              onClear={handleClearSearch}
              onKeyPress={handlePressKeySearch}
            />
          </div>
        </section>
        <section className="blogs">
          <LoadDataComponent loadStatus={loadStatus} component={blogRender()} />
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default Blog;
