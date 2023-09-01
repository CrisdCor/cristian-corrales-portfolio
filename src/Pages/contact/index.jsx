import Layout from "../../Components/Layout";
import ContactTopSection from "../../Components/ContactTopSection";
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
          <ContactTopSection />
        </div>
        <EllipseDecoration />
      </main>
    </Layout>
  );
}

export default Contact;
