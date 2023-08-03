import React from "react";
import Logo from "../../assets/Logo/Name_Logo_Prymary.svg";
import "./styles.css";

const HeaderLogo = () => {
  return (
    <img
      className="header__logo"
      src={Logo}
      alt="Logo de Cristian Corrales"
    />
  );
};

export default HeaderLogo;
