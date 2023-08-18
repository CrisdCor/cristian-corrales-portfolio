import Layout from "../../Components/Layout";

import AllProjects from "../../Containers/AllProjects";
import CardDetailProject from "../../Components/CardDetailProject";
import BgImageProjects from "../../assets/Text/BackgroundProjects.svg";
import "./styles.css";

function Projects() {
  return (
    <Layout>
      <main className="projects">
        <img className="projects__title" src={BgImageProjects} alt="" />
        <AllProjects />
        <CardDetailProject></CardDetailProject>
        <figure className="projects--image-decoration">
          <img src="" alt="" />
        </figure>
      </main>
    </Layout>
  );
}

export default Projects;
