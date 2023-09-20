import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../../Context";
import TextHome from "../../assets/Text/MenuListHome.svg";
import TextAboutMe from "../../assets/Text/MenuListAboutMe.svg";
import TextProjects from "../../assets/Text/MenuListProjects.svg";
import "./styles.css";

const ListMenu = () => {
  const context = useContext(MenuContext);

  return (
    <ul className="list-container">
      <li className="list-container__item list-container__item--home" onClick={context.closeMenu}>
        <NavLink to="/">
          <img src={TextHome} alt="Texto Inicio" />
        </NavLink>
      </li>
      <li className="list-container__item list-container__item--about-me" onClick={context.closeMenu}>
        <NavLink to="/about-me">
          <img src={TextAboutMe} alt="Texto Acerca de Mi" />
        </NavLink>
      </li>
      <li className="list-container__item list-container__item--projects" onClick={context.closeMenu}>
        <NavLink to="/projects">
          <img src={TextProjects} alt="Texto Proyectos" />
        </NavLink>
      </li>
    </ul>
  );
};

export default ListMenu;
