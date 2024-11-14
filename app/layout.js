import "../styles/globals.css";
/* import cd boostrap
import font cnd */
import { ThemeProvider } from "./context/ThemeContext";
export const metadata = {
  title: "NM Tafe Next.js App",
  description: "A modern application built with Next.js and Bulma",
  openGraph: {
    title: "My Next.js App",
    description: "A modern web application built with Next.js",
    images: [
      {
        url: "images/logo.png",
        width: 800,
        height: 600,
        alt: "App Logo",
      },
    ],
    siteName: "My Next.js App",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <a className="navbar-brand" href="/">
              My Next.js App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/about">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main content section */}
        <ThemeProvider>{children}</ThemeProvider>

        {/* Footer */}
        <footer className="bg-light text-center py-4 mt-4">
          <div className="container">
            <p className="mb-0">
              © 2024 <strong>My Next.js App</strong>. Built with Next.js and
              Bootstrap
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
