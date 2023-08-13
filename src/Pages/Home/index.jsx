import Layout from "../../Components/Layout";
import SocialNetworks from "../../Components/SocialNetworks";
import NameBackgorund from "../../assets/Text/HomeName.svg";
import "./styles.css";

function Home() {
  return (
    <Layout>
      <div className="home-wrap">
        <main className="home">
          <section className="home__top-section">
            <div className="top-section--text">
              <p className="text-lg">Hola,</p>
              <p className="text-lg">Yo soy</p>
            </div>
            <img
              className="top-section--name-image"
              src={NameBackgorund}
              alt="Cristian Corrales"
            />
          </section>
          <section className="home__medium-section">
            <div className="line-decoration line-decoration--first">
              <span className="line-decoration--line"></span>
              <span className="line-decoration--circle"></span>
            </div>
            <div className="line-decoration line-decoration--second">
              <span className="line-decoration--circle"></span>
              <span className="line-decoration--circle"></span>
              <span className="line-decoration--line"></span>
            </div>
          </section>
          <section className="home__bottom-section">
            <div>
              <p className="text-m text-right">Profesional en Mercadeo &</p>
              <p className="text-m text-right">Desarrollador Web</p>
            </div>
          </section>
        </main>
        <SocialNetworks />
      </div>
    </Layout>
  );
}

export default Home;
