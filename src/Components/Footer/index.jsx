import GitHub from "../../assets/Icons/IconGithub.svg";
import Twitter from "../../assets/Icons/IconInstagram.svg";
import Instagram from "../../assets/Icons/IconTwitter.svg";
import Gmail from "../../assets/Icons/IconGmail.svg";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="line-decoration">
        <span className="line-decoration--line"></span>
      </div>
      <p className="footer__text text-center text-l">
        No dudes en contactarme a través de mis redes sociales o enviándome un
        correo.
      </p>
      <section className="footer__social-networks">
        <a className="icons" href="">
          <img src={GitHub} alt="" />
        </a>
        <hr />
        <a className="icons" href="">
          <img src={Instagram} alt="" />
        </a>
        <hr />
        <a className="icons" href="">
          <img src={Twitter} alt="" />
        </a>
        <hr />
        <a className="icons" href="mailto:cristiandavid.corrales@gmail.com">
          <img src={Gmail} alt="" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
