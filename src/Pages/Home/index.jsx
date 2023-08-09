import Layout from "../../Components/Layout";
import SocialNetworks from "../../Components/SociaNetworks";
import "./styles.css";

function Home() {
  return (
    <Layout>
      <main className="home">
        <div className="home__text-greeting">
          <p></p>
          <p></p>
        </div>
        <SocialNetworks/>
      </main>
    </Layout>
  );
}

export default Home;
