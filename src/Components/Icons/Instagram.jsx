import Icon from "../../assets/Icons/IconInstagram.svg";
import "./styles.css";

const Instagram = () => {
  const url = "https://github.com/CrisdCor";
  const caption = "Instagram";
  const image = Icon;

  return (
    <a className="icon-wrap" href={url} target="_blank">
      <img className="icon-wrap--image" src={image} alt={caption} />
    </a>
  );
};

export default Instagram;
