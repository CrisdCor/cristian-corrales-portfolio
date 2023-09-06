import GitHub from "../../assets/Icons/IconGithub.svg";
import Twitter from "../../assets/Icons/IconInstagram.svg";
import Instagram from "../../assets/Icons/IconTwitter.svg";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="text-center text-m">
        No dudes en contactarme en cualquiera de mis redes sociales o enviándome
        un correo.
      </p>
      <section className="footer__social-networks">
        <a className="icons" href="">
          <img src={GitHub} alt="" />
        </a>
        <a className="icons" href="">
          <img src={Twitter} alt="" />
        </a>
        <a className="icons" href="">
          <img src={Instagram} alt="" />
        </a>
      </section>

      {/* <a
        className="contact__social-networks--email text-l text-center"
        href="mailto:cristiandavid.corrales@gmail.com"
      >
        cristiandavid.corrales@gmail.com
      </a> */}
    </footer>
  );
};

export default Footer;
