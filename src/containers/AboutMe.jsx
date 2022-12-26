import s from "./AboutMe.module.css";

import { BsBehance, BsInstagram, BsEnvelope, BsBrush } from "react-icons/bs";

import aboutme from "../assets/aboutme.jpg";
import Title from "../components/Title";

const AboutMe = () => {
  return (
    <div className={s.container}>
      <div className={s.aboutmeRelative}>
        <img className={s.profilePic} src={aboutme} />
        <div className={s.titleContainer}>
          <div className={s.title} size="xl">
            I'm
          </div>
          <div size="xl" className={s.nameTitle}>
            Ataberk Kurtulan
          </div>
        </div>
        <div className={s.description}>
          <div>UI/UX Designer</div>
          <div>London, UK</div>
        </div>
      </div>
      <div className={s.introduction}>
        <p className={s.paragraph}>
          As a UI/UX designer based in London, I am skilled in creating
          intuitive and visually appealing designs for a variety of projects,
          including websites, mobile apps, and software interfaces. I hold a
          degree in Graphic Design and have a strong passion for the field. I
          have gained valuable experience in the industry through my past roles,
          where I was able to utilize my strong eye for aesthetics and
          proficient use of design tools such as Adobe Creative Suite, Sketch
          and FIgma to produce high-quality work. I am dedicated to continuously
          improving my skills and staying up to date with the latest design
          trends and techniques.
        </p>
        <div className={s.contactIcons}>
          <a
            className={s.link}
            href="https://www.behance.net/ataberkrtln"
            target="_blank"
          >
            <BsBehance className={s.icon} />
          </a>
          <a className={s.link} href="https://www.instagram.com/ataberkrtln/">
            <BsInstagram className={s.icon} />
          </a>
          <a
            className={s.link}
            href="mailto:ataberkkurtulan@gmail.com?subject=Contact Request from Portfolio"
          >
            <BsEnvelope className={s.icon} />
          </a>
          <a className={s.link} href="https://ataberkrtln.artstation.com/">
            <BsBrush className={s.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
