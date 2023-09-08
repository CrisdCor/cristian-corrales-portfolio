import { useState } from "react";
import CloseIcon from "../../assets/Icons/IconClose.svg";
import "./styles.css";

const ButtonContact = () => {
  return (
    <div className="contact-wrap">
      <div className="button-contact">
        <p className="text-m text-center">CONTÁCTAME</p>
        <img className="button-contact--close-icon" src={CloseIcon} alt="" />
      </div>
    </div>
  );
};

export default ButtonContact;
