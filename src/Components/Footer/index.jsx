import GitHub from "../../assets/Icons/IconGithub.svg";
import Twitter from "../../assets/Icons/IconTwitter.svg";
import Instagram from "../../assets/Icons/IconInstagram.svg";
import CopyMail from "../Mail";
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
        <a className="icons" href="https://github.com/CrisdCor" target="_blank">
          <img src={GitHub} alt="" />
        </a>
        <hr />
        <a className="icons" href="https://twitter.com/CristianCorra11" target="_blank">
          <img src={Twitter} alt="" />
        </a>
        <hr />
        <a className="icons" href="https://www.instagram.com/crisd_cor" target="_blank">
          <img src={Instagram} alt="" />
        </a>
        <hr />
        <CopyMail />

      </section>
    </footer>
  );
};

export default Footer;
