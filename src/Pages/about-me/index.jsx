import Layout from "../../Components/Layout";
import PersonalSection from "../../Components/PersonalSection";
import StudySection from "../../Components/StudySection";
import SkillSection from "../../Components/SkillSection";
import "./styles.css";
import SummaryDownload from "../../Components/SummaryDownload";

function AboutMe() {
  return (
    <Layout>
      <main className="about-me">
        <PersonalSection />
        <StudySection />
        <SkillSection />
        <SummaryDownload />
      </main>
    </Layout>
  );
}

export default AboutMe;
