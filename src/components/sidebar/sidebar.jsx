import React, { Component } from "react";
import "./sidebar.css";

const AuthorInfo = () => (
  <div className="text-center">
    <div
      className="author-img"
      style={{ backgroundImage: "url(images/QAllaborative_logo_2_png.png)" }}
    />
    <h1 id="colorlib-logo">
      <a href="#home">Pato Miner</a>
    </h1>
    <span className="location">
      <i className="fa fa-map-marker location-icon"> Wellington, New Zealand</i>
    </span>
  </div>
);

const Navigation = ({ handleClick }) => (
  <nav id="colorlib-main-menu" role="navigation" className="navbar">
    <div id="navbar" className="collapse">
      <ul>
        <li className="active" onClick={handleClick}>
          <a href="#home" data-nav-section="home">
            Introduction
          </a>
        </li>
        <li onClick={handleClick}>
          <a href="#about" data-nav-section="about">
            About
          </a>
        </li>
        <li onClick={handleClick}>
          <a href="#timeline" data-nav-section="timeline">
            Background
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

const SocialLinks = () => (
  <nav id="colorlib-main-menu">
    <ul>
      <li>
        <a
          href="https://github.com/TheFreeRangeTester/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github fa-4x" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/patricio-m-690b3729/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin fa-3x" />
        </a>
      </li>
    </ul>
  </nav>
);

export default class Sidebar extends Component {
  handleClick = (e) => {
    if (e.target.tagName === "A") {
      document.getElementById("navbar").classList.remove("show");
    }
  };

  render() {
    return (
      <>
        <div
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          role="button"
        >
          <i />
        </div>
        <aside id="colorlib-aside" className="border js-fullheight">
          <AuthorInfo />
          <Navigation handleClick={this.handleClick} />
          <SocialLinks />
          <div className="colorlib-footer">
            <p>
              <small>
                Made in{" "}
                <span role="img" aria-label="New Zealand">
                  🇳🇿
                </span>{" "}
                by an imported{" "}
                <span role="img" aria-label="Argentina">
                  🇦🇷
                </span>
              </small>
            </p>
          </div>
        </aside>
      </>
    );
  }
}
