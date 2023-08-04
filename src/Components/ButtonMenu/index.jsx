import "./styles.css";

const ButtonMenu = () => {
  return (
    <div className="button-menu">
      <p className="button-menu__text text-m text-regular text-light">CERRAR</p>
      <span className="button-menu__bar button-menu__bar--top "></span>
      <span className="button-menu__bar button-menu__bar--medium-first"></span>
      <span className="button-menu__bar button-menu__bar--medium-second"></span>
      <span className="button-menu__bar button-menu__bar--bottom"></span>
    </div>
  );
};

export default ButtonMenu;
