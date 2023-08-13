import SocialNetworks from "../../Components/SocialNetworks";
import BgImageContact from "../../assets/Text/BackgroundContact.svg";
import "./styles.css";

const ContactTopSection = () => {
  return (
    <section className="contact__social-networks">
      <img
        className="contact__social-networks--image"
        src={BgImageContact}
        alt="Contacto"
      />
      <p className="contact__social-networks--text text-m text-center">
        Puedes contactarme en cualquiera de mis redes sociales o escribiéndome
        através de mi correo electrónico
      </p>
      <SocialNetworks />
      <a className="contact__social-networks--email text-m text-center" href="">
        cristiandavid.corrales@gmail.com
      </a>
    </section>
  );
};

export default ContactTopSection;
