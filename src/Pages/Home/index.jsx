import Layout from "../../Components/Layout";
import SocialNetworks from "../../Components/SociaNetworks";
import "./styles.css";

function Home() {
  return (
    <Layout>
      <main className="home">
        <div className="home__greeting">
          <p className="text-lg">Hola,</p>
          <p className="text-lg">Yo soy</p>
          <div className="line-decoration">
            <span className="line-decoration--line"></span>
            <span className="line-decoration--circle"></span>
          </div>
        </div>
        <figure>
          <img src="" alt="" />
        </figure>
        <div className="line-decoration">
          <span className="line-decoration--circle"></span>
          <span className="line-decoration--circle"></span>
          <span className="line-decoration--line"></span>
        </div>
        <div>
          <p className="text-lg">Profesional en Mercadro &</p>
          <p className="text-lg">Desarrollador Web</p>
        </div>
        <SocialNetworks />
      </main>
    </Layout>
  );
}

export default Home;
