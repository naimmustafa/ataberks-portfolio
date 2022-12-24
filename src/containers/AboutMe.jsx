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
          <Title size="xl">I'm</Title>
          <Title size="xl" className={s.name}>
            Ataberk Kurtulan
          </Title>
        </div>
        <div className={s.description}>
          <div>UI/UX Designer</div>
          <div>London, UK</div>
        </div>
      </div>
      <div className={s.introduction}>
        <p className={s.paragraph}>
          I am a skilled and experienced UI/UX designer based in London, with a
          passion for creating intuitive and engaging user experiences. I have a
          strong understanding of web functionality, user interfaces, and site
          architecture and am proficient in various design tools. I am
          constantly seeking ways to improve my skills and stay up-to-date in
          the industry, including exploring 3D sculpting programs such as Zbrush
          and Blender. I am a creative, enthusiastic team player who is open to
          feedback.
        </p>
        <div className={s.contactIcons}>
          <BsBehance className={s.icon} />
          <BsInstagram className={s.icon} />
          <BsEnvelope className={s.icon} />
          <BsBrush className={s.icon} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
