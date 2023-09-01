import { useContext } from "react";
import { MenuContext } from "../../Context";
import ButtonMenu from "../../Components/ButtonMenu";
import HeaderLogo from "../../Components/HeaderLogo";
import MainMenu from "../MainMenu";
import "./styles.css";

const MyHeader = () => {
  const context = useContext(MenuContext);

  const isClosed = context.isOpenMenu === false;
  const cardClassName = isClosed
    ? "animation-menu--close"
    : "animation-menu--open";

  return (
    <header className={`header ${cardClassName}`}>
      <div className="header__container">
      <MainMenu />
        <ButtonMenu />
        <HeaderLogo />
      </div>
    </header>
  );
};

export default MyHeader;
