import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"; // Import icons
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__links">
          <div className="footer__icons">
            <a href="https://www.youtube.com/channel/CHANNEL_ID_HERE">
              <FaYoutube />
            </a>

            <a href="https://www.instagram.com/INSTAGRAM_HANDLE_HERE">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/FACEBOOK_PAGE_NAME_HERE">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/TWITTER_HANDLE_HERE">
              <FaTwitter />
            </a>
            <ul>
              <li>
                <Link to="https://www.netflix.com/browse/audio-description">
                  Audio Description
                </Link>
              </li>

              <li>
                <Link to="#">Investor Relations</Link>
              </li>
              <li>
                <Link to="#">Privacy</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Help Center</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="#">Jobs</Link>
              </li>
              <li>
                <Link to="#">Legal Notice</Link>
              </li>
              <li>
                <Link to="#">
                  Do Not Sell or Share My Personal <br />
                  Information
                </Link>
              </li>
              <li>
                <Link to="#">Gift Card</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">Netflix Shope</Link>
              </li>
              <li>
                <Link to="#">Cookie Preferences</Link>
              </li>
              <li>
                <Link to="#">Media Center</Link>
              </li>
              <li>
                <Link to="#">Term Of Use</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="#">Corporate Information</Link>
              </li>
              <li>
                <Link to="#">Service Code</Link>
              </li>
              <li>
                <Link to="#">Cookie Preferences</Link>
              </li>
              <li>
                <Link to="#">1997-2023 Netflix,inc.</Link>
              </li>
            </ul>
          </div>
        </div>
        <h1>
          Built By:
          <a href="https://www.sebleethio.com/">Seblewongel Tiruneh</a>
        </h1>
      </div>
    </>
  );
}

export default Footer;
