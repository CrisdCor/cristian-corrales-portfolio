import Icon from "../../assets/Icons/IconGmail.svg";
import "./styles.css";

const Mail = () => {
  const url = "https://github.com/CrisdCor";
  const caption = "Gmail";
  const image = Icon;

  return (
    <a className="icon-wrap" href={url}>
      <img className="icon-wrap--image" src={image} alt={caption} />
    </a>
  );
};

export default Mail;
