import Layout from "../../Components/Layout";
import PersonalSection from "../../Components/PersonalSection";
import StudySection from "../../Components/StudySection";
import "./styles.css";

function AboutMe() {
  return (
    <Layout>
          <main className="about-me">
            <PersonalSection/>
            <StudySection/>
          </main>
    </Layout>
  );
}

export default AboutMe;
