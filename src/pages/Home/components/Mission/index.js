import React from "react";
import { Link } from "react-router-dom";

import bg from "../../../../assets/images/bg.svg";
import ArrowRight from "../../../../components/ArrowRight";
import "./index.sass";

const Missions = () => {
  const sectionStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom"
  };
  return (
    <section className="missions" style={sectionStyle}>
      <div className="row">
        <div className="col-md-5">
          <h3 className="missions__title">What we do</h3>
          <p>
            Lorem ipsum dolor sit amet, natum persequeris vel cu. Nominavi
            temporibus ad sit. Pri nonumy laudem complectitur ea. Modus
            eloquentiam id has.
          </p>
        </div>
        <div className="col-md-6 ml-auto row">
          <div className="col-md-6">
            <Link className="missions__item" to="/services/web-development">
              <h3 className="missions__item-title">Web development</h3>
              <ArrowRight width="33px" left="33px" />
            </Link>
            <Link className="missions__item" to="/services/ux-ui-design">
              <h3 className="missions__item-title">UX UI design</h3>
              <ArrowRight width="33px" left="33px" />
            </Link>
            <Link className="missions__item" to="/services/development-team">
              <h3 className="missions__item-title">Development team</h3>
              <ArrowRight width="33px" left="33px" />
            </Link>
          </div>
          <div className="col-md-6">
            <Link className="missions__item" to="/services/mobile-development">
              <h3 className="missions__item-title">Mobile development</h3>
              <ArrowRight width="33px" left="33px" />
            </Link>
            <Link className="missions__item" to="/services/project-management">
              <h3 className="missions__item-title">Project management</h3>
              <ArrowRight width="33px" left="33px" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missions;