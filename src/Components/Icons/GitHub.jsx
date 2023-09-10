import Icon from "../../assets/Icons/IconGithub.svg";
import "./styles.css";

const GitHub = () => {
  const url = "https://github.com/CrisdCor";
  const caption = "GitHub";
  const image = Icon;

  return (
    <a className="icon-wrap" href={url}>
      <img className="icon-wrap--image" src={image} alt={caption} />
    </a>
  );
};

export default GitHub;
