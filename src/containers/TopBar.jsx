import Button from "../components/Button";

import signature from "../assets/signature.png";

import s from "./TopBar.module.css";

import pfd from "../assets/Ataberk_Kurtulan_CV.pdf";

const TopBar = () => {
  return (
    <div className={s.container}>
      <img className={s.portrait} src={signature} />
      <div className={s.linksContainer}>
        <a href={pfd} download>
          CV
        </a>
      </div>
    </div>
  );
};

export default TopBar;
