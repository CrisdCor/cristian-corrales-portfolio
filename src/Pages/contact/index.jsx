import Layout from "../../Components/Layout";
import ContactTopSection from "../../Components/ContactTopSection";
import FormContact from "../../Containers/FormContact";
import "./styles.css";

function Contact() {
  return (
    <Layout>
      <main className="contact">
        <ContactTopSection />
        <FormContact />
      </main>
    </Layout>
  );
}

export default Contact;
