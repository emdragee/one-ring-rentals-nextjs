'use client';

import "../styles/globals.css";


// import CarouselComponent from "./components/CarouselComponent";
import ControlledCarousel from "./components/Carousel";
import AdvancedSearch from "./components/AdvancedSearch";
import PopularRegions from "./components/PopularRegions";
export default function HomePage() {

  return (
    <main>
      
   {/* <CarouselComponent></CarouselComponent> */}

   <ControlledCarousel></ControlledCarousel>
   <AdvancedSearch></AdvancedSearch>
   {/* <!-- BEGIN CONTENT WRAPPER --> */}
      <div class="content">
        <div class="container">
          <div class="row">
            <div className="main col-sm-8">
              <div className="col col-sm-13 regions-home-page">
                <PopularRegions></PopularRegions>
              </div> 
            </div>

                    {/* <!-- BEGIN SIDEBAR --> */}
                    <div class="sidebar col-sm-4">
              {/* <!-- BEGIN SIDEBAR ABOUT --> */}
              <div class="col-sm-12">
                <h2 class="section-title">Last minute deals</h2>
                <ul class="latest-news">
                  <li class="col-md-12">
                    <div class="image">
                      <a href="blog-detail.html"></a>
                      <img alt="" src="http://placehold.it/100x100" />
                    </div>

                    <ul class="top-info">
                      <li><i class="fa fa-calendar"></i>Available Now</li>
                    </ul>

                    <h4>
                      <a href="blog-detail.html">Private Beach</a>
                      <p>Lossarnach, Eriado</p>
                    </h4>
                  </li>
                  <li class="col-md-12">
                    <div class="image">
                      <a href="blog-detail.html"></a>
                      <img alt="" src="http://placehold.it/100x100" />
                    </div>

                    <ul class="top-info">
                      <li>
                        <i class="fa fa-calendar"></i>Available on 24 July
                      </li>
                    </ul>

                    <h4>
                      <a href="blog-detail.html">Mountain views</a>
                      <p>Hyarnustar, Rhovanion</p>
                    </h4>
                  </li>
                  <li class="col-md-12">
                    <div class="image">
                      <a href="blog-detail.html"></a>
                      <img alt="" src="http://placehold.it/100x100" />
                    </div>

                    <ul class="top-info">
                      <li><i class="fa fa-calendar"></i>Available 5 July</li>
                    </ul>

                    <h4>
                      <a href="blog-detail.html">Heart of the village</a>
                      <p>Minhiriath, Eriador</p>
                    </h4>
                  </li>
                  <li class="col-md-12">
                    <div class="image">
                      <a href="blog-detail.html"></a>
                      <img alt="" src="http://placehold.it/100x100" />
                    </div>

                    <ul class="top-info">
                      <li><i class="fa fa-calendar"></i>Available 6 July</li>
                    </ul>

                    <h4>
                      <a href="blog-detail.html">The city life</a>
                      <p>West Beleriand, Mordor</p>
                    </h4>
                  </li>
                </ul>
                <p class="center">
                  <a class="btn btn-fullcolor" href="#">More deals</a>
                </p>
              </div>
              {/* <!-- END SIDEBAR ABOUT --> */}

              <div class="col-sm-12">
                <h2 class="section-title">Activity</h2>
                <ul class="activity">
                  <li class="col-lg-12">
                    <a href="#"
                      ><img src="http://placehold.it/70x70" alt=""
                    /></a>
                    <div class="info">
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
                  <li class="col-lg-12">
                    <a href="#"
                      ><img src="http://placehold.it/70x70" alt=""
                    /></a>
                    <div class="info">
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
