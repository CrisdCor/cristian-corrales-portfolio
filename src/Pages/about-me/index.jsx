import Layout from "../../Components/Layout";
import PersonalSection from "../../Components/PersonalSection";
import StudySection from "../../Components/StudySection";
import SkillSection from "../../Components/SkillSection";
import Link from "../../Components/Link";
import "./styles.css";

function AboutMe() {
  return (
    <Layout>
      <main className="about-me">
        <PersonalSection />
        <StudySection />
        <SkillSection />
        <Link />
      </main>
    </Layout>
  );
}

export default AboutMe;
