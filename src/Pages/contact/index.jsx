import Layout from "../../Components/Layout";
import Footer from "../../Components/Footer";
import FormContact from "../../Containers/FormContact";
import EllipseDecoration from "../../Components/EllipseDecoration";
import BgImageContact from "../../assets/Text/BackgroundContact.svg";
import "./styles.css";

function Contact() {
  return (
    <Layout>
      <main className="contact">
        <img className="contact--image" src={BgImageContact} alt="Contacto" />
        <div className="contact-wrap">
          <FormContact />
          <Footer />
        </div>
        <EllipseDecoration />
      </main>
    </Layout>
  );
}

export default Contact;
