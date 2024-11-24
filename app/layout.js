import "../styles/globals.css";
import "/node_modules/@fortawesome/fontawesome-free/css/all.min.css";

import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
const imagePath = '/images/logo.png'; // Use a fixed, correct path


/* import cd boostrap
import font cnd */

export const metadata = {
  title: "Dynamic Title | My Next.js App",
  description: "Dynamic description",
  openGraph: {
    title: "Dynamic OG Title",
    description: "Dynamic OG description",
    images: [
      {
       
        width: 800,
        height: 600,
        alt: "Dynamic Logo",
      },
    ],
    siteName: "My Dynamic Site",
    link:<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>,
    link:<link
      href="http://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic"
      rel="stylesheet"
      type="text/css"
    />
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic"
          rel="stylesheet"
        />
      </head>
      <body>
    {/* <!-- BEGIN WRAPPER --> */}
    <div id="wrapper">
      {/* <!-- BEGIN HEADER --> */}
      <header id="header">
        <div id="top-bar">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <ul id="top-buttons">
                  <li>
                    <a href="#"><i className="fa fa-sign-in"></i> Login</a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-pencil-square-o"></i> Register</a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <div className="language-switcher">
                      <span><i className="fa fa-globe"></i> English</span>
                      <ul>
                        <li><a href="#">Deutsch</a></li>
                        <li><a href="#">Espa&ntilde;ol</a></li>
                        <li><a href="#">Fran&ccedil;ais</a></li>
                        <li><a href="#">Portugu&ecirc;s</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!---Naviagtion  START--> */}
        <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <a href="/" className="nav-logo">
          <img src='/images/logo.png' alt="One Ring Rentals"/>
        </a>
    {/* BEGIN SEARCH */}
        <div id="sb-search" className="sb-search">
        <i className="my-search"><FaSearch /></i>
        </div>
    {/* END SEARCH  */}
    {/* BEGIN MAIN MENU  */}
        <nav className="navbar navbar-expand">
          <button id="nav-mobile-btn">
            <i className="fa fa-bars"></i>
          </button>

          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/apod">NASA APOS</a></li>
            <li><a href="/travel-guides">Travel Guides</a></li>
            <li><a href="/regions">Regions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
    {/* END MAIN MENU  */}
      </div>
    </div>
  </div>


        {/* <!---Naviagtion END--> */}
      </header>
        {/* Main content section */}
        {children}


        <footer id="footer">
    <div id="footer-top" className="container">
      <div className="row">
        <div className="block col-sm-3">
          <a href="#"
            ><img src="images/logo.png" alt="One Ring Rentals"
          /></a>
          <br /><br />
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
            volutpat quam dignissim, convallis elit id, efficitur sem.
            Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
            pellentesque nec at metus.
          </p>
        </div>
        <div className="block col-sm-3">
          <h3>Helpful Links</h3>
          <ul className="footer-links">
            <li><a href="#">All rentals</a></li>
            <li><a href="#">List your rental</a></li>
            <li><a href="#">Read our FAQs</a></li>
          </ul>
        </div>
        <div className="block col-sm-6">
          <h3>Popular regions</h3>
          <div className="row">
            <div className="col-sm-6">
              <ul className="footer-listings">
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Rhovanion</a></p>
                </li>
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Eriador</a></p>
                </li>
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p>
                    <a href="properties-detail.html">Bay of Belfalas</a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="footer-listings">
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Mordor</a></p>
                </li>
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Arnor</a></p>
                </li>
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Forlindon</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- BEGIN COPYRIGHT --> */}
    <div id="copyright">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            &copy; 2014 One Ring Rentals

            {/* <!-- BEGIN SOCIAL NETWORKS --> */}
            <ul className="social-networks">
              <li>
                <a href="#"><i className="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-google"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-pinterest"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-youtube"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-rss"></i></a>
              </li>
            </ul>
            {/* <!-- END SOCIAL NETWORKS --> */}
          </div>
        </div>
      </div>
    </div>
    {/* <!-- END COPYRIGHT --> */}
  </footer>
  <script type='text/javascript' src='config.js'></script>
  </div>
  </body>
    </html>
  );
}
