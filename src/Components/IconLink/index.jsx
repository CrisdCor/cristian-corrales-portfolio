import Github from "../../assets/Icons/IconGithub.svg";
import Twitter from "../../assets/Icons/IconTwitter.svg";
import "./styles.css";

// Se crea el objeto con la data de los enlaces de los íconos
const iconData = {
  Github: {
    icon: Github,
    name: "Ícono de Github",
    url: "https://github.com/CrisdCor",
  },
  Twitter: {
    icon: Twitter,
    name: "Ícono de Twitter",
    url: "https://twitter.com/CristianCorra11",
  },
};

const IconLink = ({ iconName }) => {
  const { icon, name, url } = iconData[iconName] || {};

  return (
    <a className="icon-link" href={url} target="_blank">
      <img src={icon} alt={name} />
    </a>
  );
};

export default IconLink;
