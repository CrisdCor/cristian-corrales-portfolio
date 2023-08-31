import SocialNetworks from "../../Components/SocialNetworks";

import "./styles.css";

const ContactTopSection = () => {
  return (
    <section className="contact__info">
      <a
        className="contact__social-networks--email text-l text-center"
        href="mailto:cristiandavid.corrales@gmail.com"
      >
        cristiandavid.corrales@gmail.com
      </a>
      <SocialNetworks />
    </section>
  );
};

export default ContactTopSection;
