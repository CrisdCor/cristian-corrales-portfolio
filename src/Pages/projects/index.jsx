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
        <div className="line-decoration">
          <span className="line-decoration--circle"></span>
          <span className="line-decoration--line"></span>
        </div>
        <CardDetailProject></CardDetailProject>
        <div className="line-decoration">
          <span className="line-decoration--line"></span>
          <span className="line-decoration--circle"></span>
          <span className="line-decoration--circle"></span>
        </div>
        <figure className="projects--image-decoration">
          <img src="" alt="" />
        </figure>
      </main>
    </Layout>
  );
}

export default Projects;
