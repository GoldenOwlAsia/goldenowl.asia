import React from 'react'

import './index.sass'

const OurArchievement = () => {
    return (
        <section className="archievement">
            <h3 className="archievement__title" data-aos="flip-up">Our Archievements</h3>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 d-block archievement__items" data-aos="fade-down">
                    <div>
                        <img
                            width='220px' height='200px'
                            src="https://assets.goodfirms.co/badges/color-badge/app-development.svg"
                            alt="GoodFirms Badge"
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 d-block archievement__items" data-aos="fade-up">
                    <div>
                        <img
                            width='220px' height='200px'
                            src="https://www.appfutura.com/img/badges/badge-top-web-company-vietnam.png"
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 d-block archievement__items" data-aos="fade-down">
                    <div>
                        <a href="https://www.sortlist.com/agency/golden-owl-consulting-ltd">
                            <img
                                width='220px' height='200px'
                                src="https://core.sortlist.com//_/apps/core/images/badges-en/badge-stars-blue-light-xl.svg"
                                alt="stars" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 d-block archievement__items" data-aos="fade-up">
                    <div>
                        <a href="https://clutch.co/web-developers/research">
                            <img
                                src="https://static2.clutch.co/badges/2020/Web_Developers_2020.png"
                                height='216px' width='200px'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurArchievement