import ButtonContact from "../ButtonContact";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="line-decoration">
        <span className="line-decoration--line"></span>
      </div>
      <p className="footer__text text-center text-m">
        No dudes en contactarme a través de mis redes sociales o enviándome un
        correo.
      </p>
      <ButtonContact/>
    </footer>
  );
};

export default Footer;
