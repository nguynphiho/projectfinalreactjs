import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img
          src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/logo-mobile-img-1.png"
          alt="logo-mobile"
        />
      </div>
      <div className="footer__address">
        <span>Avenue Montaigne 54, Paris</span>
        <span>+ 0 690 083 215</span>
      </div>
      <div className="footer__link">
        <a href="https://www.facebook.com/" target='_blank' rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.youtube.com/" target='_blank' rel="noreferrer">
          <AiFillYoutube />
        </a>
        <a href="https://twitter.com/" target='_blank' rel="noreferrer">
          <AiOutlineTwitter />
        </a>
        <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com/" target='_blank' rel="noreferrer">
          <AiFillLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <span>
          © 2021{" "}
          <Link className="footer__copyright-a" to="/">
            Qode Interactive
          </Link>{" "}
          , All Rights Reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
