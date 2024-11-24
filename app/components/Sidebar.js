import React from 'react';

const Sidebar = () => {
  return (
    <div className="col-sm-12">
      <h2 className="section-title">Last minute deals</h2>
      <ul className="latest-news">
        <li className="col-md-12">
          <div className="image">
            <a href="blog-detail.html">
              <img alt="Private Beach" src="http://placehold.it/100x100" />
            </a>
          </div>

          <ul className="top-info">
            <li>
              <i className="fa fa-calendar"></i>Available Now
            </li>
          </ul>

          <h4>
            <a href="blog-detail.html">Private Beach</a>
          </h4>
          <p>Lossarnach, Eriado</p>
        </li>
        <li className="col-md-12">
          <div className="image">
            <a href="blog-detail.html">
              <img alt="Mountain views" src="http://placehold.it/100x100" />
            </a>
          </div>

          <ul className="top-info">
            <li>
              <i className="fa fa-calendar"></i>Available on 24 July
            </li>
          </ul>

          <h4>
            <a href="blog-detail.html">Mountain views</a>
          </h4>
          <p>Hyarnustar, Rhovanion</p>
        </li>
        <li className="col-md-12">
          <div className="image">
            <a href="blog-detail.html">
              <img alt="Heart of the village" src="http://placehold.it/100x100" />
            </a>
          </div>

          <ul className="top-info">
            <li>
              <i className="fa fa-calendar"></i>Available 5 July
            </li>
          </ul>

          <h4>
            <a href="blog-detail.html">Heart of the village</a>
          </h4>
          <p>Minhiriath, Eriador</p>
        </li>
        <li className="col-md-12">
          <div className="image">
            <a href="blog-detail.html">
              <img alt="The city life" src="http://placehold.it/100x100" />
            </a>
          </div>

          <ul className="top-info">
            <li>
              <i className="fa fa-calendar"></i>Available 6 July
            </li>
          </ul>

          <h4>
            <a href="blog-detail.html">The city life</a>
          </h4>
          <p>West Beleriand, Mordor</p>
        </li>
      </ul>
      <p className="center">
        <a className="btn btn-fullcolor" href="#">
          More deals
        </a>
      </p>

      <div className="col-sm-12">
        <h2 className="section-title">Activity</h2>
        <ul className="activity">
          <li className="col-lg-12">
            <a href="#">
              <img src="http://placehold.it/70x70" alt="Sam Minnée" />
            </a>
            <div className="info">
              <h5>
                Sam Minnée reviewed
                <a href="#">The House With No Windows</a>
              </h5>
              <p>Awesome solitary confinement, mate. Spot on. Sweet as.</p>
              <h6>Just now</h6>
            </div>
          </li>
          <li className="col-lg-12">
            <a href="#">
              <img src="http://placehold.it/70x70" alt="Ingo Schoomer" />
            </a>
            <div className="info">
              <h5>
                Ingo Schoomer asked a question about
                <a href="#">The Mistake by the Lake</a>
              </h5>
              <p>Has this house been unit tested?</p>
              <h6>37 minutes ago</h6>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
