import ButtonMenu from "../../Components/ButtonMenu";
import HeaderLogo from "../../Components/HeaderLogo";
import "./styles.css";

const MyHeader = () => {
  return (
    <header className="header">
      <div className="header__container">
        <ButtonMenu />
        <HeaderLogo />
      </div>
    </header>
  );
};

export default MyHeader;
