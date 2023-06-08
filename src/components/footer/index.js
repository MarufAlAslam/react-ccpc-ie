import React from "react";
import logo from "../../assets/images/footer-logo.svg";

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaVimeo,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer py-[20px] bg-[#2E4660]">
      <div className="custom-container">
        <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-between items-start">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <p className="text-white">
            Competition and Consumer Protection Commission
            <br />
            Bloom House, Railway Street, Dublin 1, D01 C576
            <br />
            Tel +353 (0)1 402 5500
            <br />
            Consumer helpline 01 402 5555
          </p>
          <div>
            <p className="text-white">USEFUL INFORMATION</p>
            <div className="flex mt-[15px] justify-between gap-5">
              <ul>
                <li className="text-white text-sm">
                  <a href="/" className="text-white">
                    Legal
                  </a>
                </li>
                <li className="text-white text-sm">
                  <a href="/" className="text-white">
                    Accessibility
                  </a>
                </li>
                <li className="text-white text-sm">
                  <a href="/" className="text-white">
                    Data Protection & Privacy
                  </a>
                </li>
                <li className="text-white text-sm">
                  <a href="/" className="text-white">
                    Cookie Policy
                  </a>
                </li>
                <li className="text-white text-sm">
                  <a href="/" className="text-white">
                    Manage Cookies
                  </a>
                </li>
              </ul>
              <div>
                <ul>
                  <li className="text-white text-sm">
                    <a href="/" className="text-white">
                      Contact
                    </a>
                  </li>
                  <li className="text-white text-sm">
                    <a href="/" className="text-white">
                      Careers
                    </a>
                  </li>
                  <li className="text-white text-sm">
                    <a href="/" className="text-white">
                      FOI
                    </a>
                  </li>
                  <li className="text-white text-sm">
                    <a href="/" className="text-white">
                      Sitemap
                    </a>
                  </li>
                </ul>

                <div className="social mt-[20px] flex justify-start items-center gap-3">
                  <a href="/" className="text-white text-lg">
                    <FaFacebook />
                  </a>
                  <a href="/" className="text-white text-lg">
                    <FaTwitter />
                  </a>
                  <a href="/" className="text-white text-lg">
                    <FaLinkedin />
                  </a>
                  <a href="/" className="text-white text-lg">
                    <FaVimeo />
                  </a>
                  <a href="/" className="text-white text-lg">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
