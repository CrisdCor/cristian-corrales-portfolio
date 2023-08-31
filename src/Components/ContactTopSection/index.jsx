import SocialNetworks from "../../Components/SocialNetworks";

import "./styles.css";

const ContactTopSection = () => {
  return (
    <section className="contact__social-networks">
      <h2 className="text-lg text-regular text-center">
        ¿Algo que me quieras preguntar?
      </h2>
      <p className="contact__social-networks--text text-m text-center">
        Puedes contactarme en cualquiera de mis redes sociales o escribiéndome
        através de mi correo electrónico
      </p>
      <SocialNetworks />
      <a
        className="contact__social-networks--email text-m text-center"
        href="mailto:cristiandavid.corrales@gmail.com"
      >
        cristiandavid.corrales@gmail.com
      </a>
    </section>
  );
};

export default ContactTopSection;
