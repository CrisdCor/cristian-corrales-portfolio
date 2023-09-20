import Layout from "../../Components/Layout";
import ProjectsGrid from "../../Containers/ProjectsGrid";
import CardDetailProject from "../../Containers/CardDetailProject";
import BgImageProjects from "../../assets/Text/BackgroundProjects.svg";
import "./styles.css";

function Projects() {
  return (
    <Layout>
      <main className="projects">
        <img className="projects__title" src={BgImageProjects} alt="" />
        <ProjectsGrid />
        <CardDetailProject />
      </main>
    </Layout>
  );
}

export default Projects;
