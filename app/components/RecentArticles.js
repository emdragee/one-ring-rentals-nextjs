import React from 'react';

function RecentArticles() {
  return (
    <section>
      <h2 className="section-title">Recent Articles</h2>
      <div className="grid-style1 row">
        <div className="item col-md-4">
          <div className="image">
            <a href="#">
              <span className="btn btn-default">
                <i className="fa fa-file-o"></i> Read More
              </span>
            </a>
            <img src="http://placehold.it/766x515" alt="" />
          </div>
          <div className="tag">
            <i className="fa fa-file-text"></i>
          </div>
          <div className="info-blog">
            <ul className="top-info">
              <li>
                <i className="fa fa-calendar"></i> July 30, 2014
              </li>
              <li>
                <i className="fa fa-comments-o"></i> 2
              </li>
              <li>
                <i className="fa fa-tags"></i> Properties, Prices, best deals
              </li>
            </ul>
            <h3>
              <a href="#">How to get your dream property for the best price?</a>
            </h3>
            <p>
              Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero
              condimentum.
            </p>
          </div>
        </div>

        <div className="item col-md-4">
          <div className="image">
            <a href="#">
              <span className="btn btn-default">
                <i className="fa fa-file-o"></i> Read More
              </span>
            </a>
            <img src="http://placehold.it/766x515" alt="" />
          </div>
          <div className="tag">
            <i className="fa fa-film"></i>
          </div>
          <div className="info-blog">
            <ul className="top-info">
              <li>
                <i className="fa fa-calendar"></i> July 24, 2014
              </li>
              <li>
                <i className="fa fa-comments-o"></i> 4
              </li>
              <li>
                <i className="fa fa-tags"></i> Tips, Mortgage
              </li>
            </ul>
            <h3>
              <a href="#">7 tips to get the best mortgage.</a>
            </h3>
            <p>
              Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero
              condimentum.
            </p>
          </div>
        </div>

        <div className="item col-md-4">
          <div className="image">
            <a href="#">
              <span className="btn btn-default">
                <i className="fa fa-file-o"></i> Read More
              </span>
            </a>
            <img src="http://placehold.it/766x515" alt="" />
          </div>
          <div className="tag">
            <i className="fa fa-file-text"></i>
          </div>
          <div className="info-blog">
            <ul className="top-info">
              <li>
                <i className="fa fa-calendar"></i> July 05, 2014
              </li>
              <li>
                <i className="fa fa-comments-o"></i> 1
              </li>
              <li>
                <i className="fa fa-tags"></i> Location, Price, House
              </li>
            </ul>
            <h3>
              <a href="#">House, location or price: What's the most important factor?</a>
            </h3>
            <p>
              Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero
              condimentum.
            </p>
          </div>
        </div>
      </div>
      <div className="center">
        <a href="#" className="btn btn-default-color">
          View All News
        </a>
      </div>
    </section>
  );
}

export default RecentArticles;
