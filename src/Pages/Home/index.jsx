import Footer from "../../Components/Footer";
import Layout from "../../Components/Layout";

import NameBackgorund from "../../assets/Text/HomeName2.svg";
import "./styles.css";

function Home() {
  return (
    <Layout>
      <div className="home-wrap">
        <main className="home">
          <section className="home__top-section">
            <img
              className="top-section--name-image"
              src={NameBackgorund}
              alt="Cristian Corrales"
            />
            <div className="top-section--shadow-decoration"></div>
            {/* <div className="top-section--text">
                <p className="text-lg">Hola,</p>
                <p className="text-lg">Yo soy</p>
              </div> */}
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
              <p className="text-lg text-left">Profesional en Mercadeo &</p>
              <p className="text-lg text-left">Desarrollador Web</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Layout>
  );
}

export default Home;
