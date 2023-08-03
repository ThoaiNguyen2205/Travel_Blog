import "../../style/base/base.scss";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__copyright text-white text-center fw-light ">
        <FontAwesomeIcon
          icon={faCopyright}
          className="footer__copyright-item"
        />
        <span className="ms-2">
          {" "}
          <span className="text-danger">2023</span> | Copyright by Travel Blog
          TypeScript
        </span>
      </div>
      <div className="footer__contact d-flex justify-content-around">
        <Link href={"/"} className="footer__contact-link">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="footer__contact-item"
          />
          <span>FACEBOOK</span>
        </Link>
        <Link href={"/"} className="footer__contact-link">
          <FontAwesomeIcon icon={faTwitter} className="footer__contact-item" />
          <span>TWITTER</span>
        </Link>
        <Link href={"/"} className="footer__contact-link">
          <FontAwesomeIcon
            icon={faGooglePlusG}
            className="footer__contact-item"
          />
          <span>GOOGLE PLUS</span>
        </Link>
        <Link href={"/"} className="footer__contact-link">
          <FontAwesomeIcon
            icon={faInstagram}
            className="footer__contact-item"
          />
          <span>INSTAGRAM</span>
        </Link>
        <Link href={"/"} className="footer__contact-link">
          <FontAwesomeIcon
            icon={faPinterestP}
            className="footer__contact-item"
          />
          <span>PINTEREST</span>
        </Link>
      </div>
    </div>
  );
}
