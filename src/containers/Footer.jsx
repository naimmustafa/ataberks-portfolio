import React, { useState, useEffect } from "react";

import { BsArrowUp } from "react-icons/bs";
import Button from "../components/Button";

import s from "./Footer.module.css";

const Footer = () => {
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className={s.footer}>
      {scrollPosition > 500 && (
        <Button onClick={onScrollTop} asLink>
          <BsArrowUp /> Back to Top
        </Button>
      )}
    </footer>
  );
};

export default Footer;
