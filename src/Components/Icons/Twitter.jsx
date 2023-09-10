import Icon from "../../assets/Icons/IconTwitter.svg";
import "./styles.css";

const Twitter = () => {
  const url = "https://github.com/CrisdCor";
  const caption = "Twitter";
  const image = Icon;

  return (
    <a className="icon-wrap" href={url}>
      <img className="icon-wrap--image" src={image} alt={caption} />
    </a>
  );
};

export default Twitter;
