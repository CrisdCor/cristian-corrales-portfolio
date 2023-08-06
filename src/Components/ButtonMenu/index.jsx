import { useContext } from "react";
import { MenuContext } from "../../Context";
import "./styles.css";

const ButtonMenu = () => {
  const context = useContext(MenuContext);

  const showMenu = () => {
    context.isOpenMenu === false ? context.openMenu() : context.closeMenu();
  };

  return (
    <div className="button-menu" onClick={showMenu}>
      <p
        className={`${
          context.isOpenMenu === false
            ? "button-menu__text text-sm text-regular text-light"
            : "button-menu__text text-sm text-regular text-light button-menu__text--close"
        }`}
      >
        {context.isOpenMenu === false ? "MENÚ" : "CERRAR"}
      </p>
      <span
        className={`${
          context.isOpenMenu === false
            ? "button-menu__bar-top"
            : "button-menu__bar-top button-menu__bar-top--close"
        }`}
      ></span>
      <span
        className={`${
          context.isOpenMenu === false
            ? "button-menu__bar-medium-first"
            : "button-menu__bar-medium-first button-menu__bar-medium-first--close"
        }`}
      ></span>
      <span
        className={`${
          context.isOpenMenu === false
            ? "button-menu__bar-medium-second"
            : "button-menu__bar-medium-second button-menu__bar-medium-second--close"
        }`}
      ></span>
      <span
        className={`${
          context.isOpenMenu === false
            ? "button-menu__bar-bottom"
            : "button-menu__bar-bottom button-menu__bar-bottom--close"
        }`}
      ></span>
    </div>
  );
};

export default ButtonMenu;
