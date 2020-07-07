import React, { useState, useEffect } from 'react';
import AnimatedNumber from 'animated-number-react';

import archieves from '../../../../utils/archives';
import objectToArray from '../../../../utils/objectToArray';

import './index.sass';

let check = 0;
const Archieves = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  console.log(check);
  useEffect(() => {
    check = 0;
  }, []);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    if (scrollTop > 2420 && check === 0) {
      setScrolling(true);
      check = 1;
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);
  return (
    <section className="archieves d-block" id="numanimate">
      <div className="row justify-content-center">
        <p className="archieves__title text-center">
          <strong>Trusted by hundreds of businesses so far</strong>
          <br />
          Our clients are from all over the world and are doing amazing things
        </p>
      </div>
      <div className="archieves__main-content row">
        {objectToArray(archieves).map((item) => (
          <div className="col-6 col-md-2 d-block archieves__item">
            <center>
              {scrolling === true
                ? (
                  <>
                    <h2 transform="rotate(-15 150 150) translate(500,100)">
                      <AnimatedNumber
                        style={{
                          transition: '0.8s ease-out',
                          transitionProperty:
                           'background-color, color, opacity',
                        }}
                        frameStyle={(perc) => (
                          perc === 100 ? {} : { opacity: 0.25 }
                        )}
                        duration={3000}
                        value={item.number}
                        className="number"
                        component="text"
                        formatValue={(n) => `${Number(n).toFixed(0)}`}
                      />

                      <sup>{item.unit}</sup>
                    </h2>
                    <p>{item.key}</p>
                  </>
                )
                : (
                  <>
                    <h2>{0}</h2>
                    <p>{item.key}</p>
                  </>
                )}

            </center>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Archieves;
