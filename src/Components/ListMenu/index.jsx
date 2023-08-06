import { NavLink } from "react-router-dom";
import TextHome from "../../assets/Text/MenuListHome.svg";
import TextAboutMe from "../../assets/Text/MenuListAboutMe.svg";
import TextProjects from "../../assets/Text/MenuListProjects.svg";
import TextContact from "../../assets/Text/MenuListContact.svg";
import "./styles.css";

const ListMenu = () => {
  return (
    <ul className="list-container">
      <li className="list-container__item list-container__item--home">
        <NavLink to="/">
          <img src={TextHome} alt="Texto Inicio" />
        </NavLink>
      </li>
      <li className="list-container__item list-container__item--about-me">
        <NavLink to="/about-me">
          <img src={TextAboutMe} alt="Texto Acerca de Mi" />
        </NavLink>
      </li>
      <li className="list-container__item list-container__item--projects">
        <NavLink to="/projects">
          <img src={TextProjects} alt="Texto Proyectos" />
        </NavLink>
      </li>
      <li className="list-container__item list-container__item--contact">
        <NavLink to="/contact">
          <img src={TextContact} alt="Texto Contacto" />
        </NavLink>
      </li>
    </ul>
  );
};

export default ListMenu;
