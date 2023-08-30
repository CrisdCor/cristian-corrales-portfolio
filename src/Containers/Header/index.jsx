import ButtonMenu from "../../Components/ButtonMenu";
import HeaderLogo from "../../Components/HeaderLogo";
import MainMenu from "../MainMenu";
import "./styles.css";

const MyHeader = () => {
  return (
    <header className="header">
      <MainMenu />
      <div className="header__container">
        <ButtonMenu />
        <HeaderLogo />
      </div>
    </header>
  );
};

export default MyHeader;
