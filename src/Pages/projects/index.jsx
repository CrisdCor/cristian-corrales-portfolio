import Layout from "../../Components/Layout";
import AllProjects from "../../Containers/AllProjects";
import BgImageProjects from "../../assets/Text/BackgroundProjects.svg";
import "./styles.css";

function Projects() {
  return (
    <Layout>
      <main className="projects">
        <img className="projects__title" src={BgImageProjects} alt="" />
        <AllProjects />
        <section className="projects__detail">
          <div className="line-decoration">
            <span className="line-decoration--circle"></span>
            <span className="line-decoration--line"></span>
          </div>
          <p className="projects__detail--text text-m text-center text-bold">
            Selecciona cualquier proyecto que quieras ver en detalle
          </p>
          <div className="line-decoration line-decoration--right">
            <span className="line-decoration--line"></span>
            <span className="line-decoration--circle"></span>
            <span className="line-decoration--circle"></span>
          </div>
          h
        </section>
        <figure className="projects--image-decoration">
          <img src="" alt="" />
        </figure>
      </main>
    </Layout>
  );
}

export default Projects;
