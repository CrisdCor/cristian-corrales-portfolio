import Icon from "../../assets/Icons/IconTwitter.svg";
import "./styles.css";

const Twitter = () => {
  const url = "https://twitter.com/CristianCorra11";
  const caption = "Twitter";
  const image = Icon;

  return (
    <a className="icon-wrap" href={url} target="_blank">
      <img className="icon-wrap--image" src={image} alt={caption} />
    </a>
  );
};

export default Twitter;
