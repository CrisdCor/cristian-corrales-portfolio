import { useState } from "react";
import GitHub from "../Icons/GitHub";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import Mail from "../Icons/Mail";
import CloseIcon from "../../assets/Icons/IconClose.svg";
import "./styles.css";

const MenuContact = () => {
  const [stateContact, setStateContact] = useState(false);

  const openCloseContacts = () => {
    setStateContact(!stateContact);
  };

  const isClosed = stateContact === false;

  const buttonClassName = isClosed
    ? "button-contact button-contact--hidden-icons"
    : "button-contact button-contact--show-icons";

  const textClassName = isClosed
    ? "button-contact__text text-m text-center button-contact-text--hidden-icons"
    : "button-contact__text text-m text-center button-contact-text--show-icons";

  const iconClassName = isClosed
    ? "button-contact__icon button-contact__icon--show-icons"
    : "button-contact__icon button-contact__icon--hidden-icons";

  return (
    <div className="contact-section">
      <GitHub />
      <Instagram />
      <Twitter />
      <Mail />
      <div className={buttonClassName} onClick={openCloseContacts}>
        <p className={textClassName}>CONTÁCTAME</p>
        <img className={iconClassName} src={CloseIcon} alt="" />
      </div>
    </div>
  );
};

export default MenuContact;
