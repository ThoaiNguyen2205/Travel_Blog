"use client";
import React, { useEffect } from "react";
import "../../style/base/base.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const BackToTopButton = () => {
  useEffect(() => {
    const btn: any = document.getElementById("back-to-top-button");

    const handleScroll = () => {
      if (window.scrollY > 300) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    };

    const handleButtonClick = (e: any) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    btn.addEventListener("click", handleButtonClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      btn.removeEventListener("click", handleButtonClick);
    };
  }, []);

  return (
    <button id="back-to-top-button" className="back-to-top-button">
      <FontAwesomeIcon
        icon={faAngleUp}
        style={{ width: 18, height: 18 }}
        className="back-to-top__icon"
      />
    </button>
  );
};

export default BackToTopButton;
