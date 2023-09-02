import Layout from "../../Components/Layout";
import PersonalSection from "../../Components/PersonalSection";
import StudySection from "../../Components/StudySection";
import SkillSection from "../../Components/SkillSection";
import Link from "../../Components/Link";
import BgImageAboutMe from "../../assets/Text/BackgroundAboutMe.svg";

import "./styles.css";

function AboutMe() {
  return (
    <Layout>
      <main className="about-me">
        <img className="about-me--image" src={BgImageAboutMe} alt="Contacto" />
        <div className="about-me__grid">
          <PersonalSection />
          <StudySection />
        </div>
        {/* <SkillSection /> */}
      </main>
    </Layout>
  );
}

export default AboutMe;
