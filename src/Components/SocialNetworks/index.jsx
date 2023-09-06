import Github from "../../assets/Icons/IconGithub.svg";
import "./styles.css";

const SocialNetworks = () => {
  const nameIcon = "Ícono de Github";
  const url = "https://github.com/CrisdCor";

  return (
    <ul>
      <li>
        <a className="icon-wrap" href={url} target="_blank">
          <img src={Github} alt={nameIcon} />
        </a>
      </li>
    </ul>
  );
};

export default SocialNetworks;
