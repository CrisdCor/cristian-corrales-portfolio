import Layout from "../../Components/Layout";
import AllProjects from "../../Containers/AllProjects";
import CardDetailProject from "../../Containers/CardDetailProject";
import BgImageProjects from "../../assets/Text/BackgroundProjects.svg";
import "./styles.css";

function Projects() {
  return (
    <Layout>
      <main className="projects">
        <img className="projects__title" src={BgImageProjects} alt="" />
        <AllProjects />
        <CardDetailProject />
      </main>
    </Layout>
  );
}

export default Projects;
