'use client';

import "../styles/globals.css";
import "../styles/static.css";


// import CarouselComponent from "./components/CarouselComponent";
import ControlledCarousel from "./components/Carousel";
import AdvancedSearch from "./components/AdvancedSearch";
import PopularRegions from "./components/PopularRegions";
import TravelGuideGridIndex from "./components/TravelGuideGridIndex";
import RecentArticles from "./components/RecentArticles";
export default function HomePage() {

  return (
    <main>
      
   {/* <CarouselComponent></CarouselComponent> */}

   <ControlledCarousel></ControlledCarousel>
   <AdvancedSearch></AdvancedSearch>
   {/* <!-- BEGIN CONTENT WRAPPER --> */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-8">
              <div className="col col-sm-13 regions-home-page">
                <PopularRegions></PopularRegions>
              </div>
              <div className="col col-sm-13">
                <TravelGuideGridIndex></TravelGuideGridIndex>
              </div>  
              <div className="col col-sm-13">
                <RecentArticles></RecentArticles>
              </div>  
            </div>

                    {/* <!-- BEGIN SIDEBAR --> */}
                    <div className="sidebar col-sm-4">
              {/* <!-- BEGIN SIDEBAR ABOUT --> */}
              <div className="col-sm-12">
                <h2 className="section-title">Last minute deals</h2>
                <ul className="latest-news">
                  <li className="col-md-12">
                    <div className="image">
                      <a href="blog-detail.html"></a>
                      <img alt="" src="http://placehold.it/100x100" />
                    </div>

                    <ul className="top-info">
                      <li><i className="fa fa-calendar"></i>Available Now</li>
                    </ul>

                    <h4>
                      <a href="blog-detail.html">Private Beach</a>
                      <p>Lossarnach, Eriado</p>
                    </h4>
                  </li>
                  <li className="col-md-12">
                    <div className="image">
                      <a href="blog-detail.html"></a>
                      <img alt="" src="http://placehold.it/100x100" />
                    </div>

                    <ul className="top-info">
                      <li>
                        <i className="fa fa-calendar"></i>Available on 24 July
                      </li>
                    </ul>

                    <h4>
                      <a href="blog-detail.html">Mountain views</a>
                      <p>Hyarnustar, Rhovanion</p>
                    </h4>
                  </li>
                  <li className="col-md-12">
                    <div className="image">
                      <a href="blog-detail.html"></a>
                      <img alt="" src="http://placehold.it/100x100" />
                    </div>

                    <ul className="top-info">
                      <li><i className="fa fa-calendar"></i>Available 5 July</li>
                    </ul>

                    <h4>
                      <a href="blog-detail.html">Heart of the village</a>
                      <p>Minhiriath, Eriador</p>
                    </h4>
                  </li>
                  <li className="col-md-12">
                    <div className="image">
                      <a href="blog-detail.html"></a>
                      <img alt="" src="http://placehold.it/100x100" />
                    </div>

                    <ul className="top-info">
                      <li><i className="fa fa-calendar"></i>Available 6 July</li>
                    </ul>

                    <h4>
                      <a href="blog-detail.html">The city life</a>
                      <p>West Beleriand, Mordor</p>
                    </h4>
                  </li>
                </ul>
                <p className="center">
                  <a className="btn btn-fullcolor" href="#">More deals</a>
                </p>
              </div>
              {/* <!-- END SIDEBAR ABOUT --> */}

              <div className="col-sm-12">
                <h2 className="section-title">Activity</h2>
                <ul className="activity">
                  <li className="col-lg-12">
                    <a href="#"
                      ><img src="http://placehold.it/70x70" alt=""
                    /></a>
                    <div className="info">
                      <h5>
                        Sam Minnée reviewed
                        <a href="#">The House With No Windows</a>
                      </h5>
                      <p>
                        Awesome solitary confinement, mate. Spot on. Sweet as.
                      </p>
                      <h6>Just now</h6>
                    </div>
                  </li>
                  <li className="col-lg-12">
                    <a href="#"
                      ><img src="http://placehold.it/70x70" alt=""
                    /></a>
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
            {/* <!-- END SIDEBAR --> */}
            

          </div>
        </div>
      </div>


  

    </main>
  );
}
