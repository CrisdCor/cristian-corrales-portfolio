import IconGithub from "../../assets/Icons/IconGithub.svg";
import IconInstagram from "../../assets/Icons/IconInstagram.svg";
import IconTwitter from "../../assets/Icons/IconTwitter.svg";
import "./styles.css";

const SocialNetworks = () => {
  const urlGithub = "https://github.com/CrisdCor";
  const urlInstagram = "https://www.instagram.com/crisd_cor/";
  const urltwitter = "https://twitter.com/CristianCorra11";

  return (
    <div className="social-networks">
      <a className="social-networks__icon" href={urlGithub} target="_blank">
        <img src={IconGithub} alt="" />
      </a>
      <a className="social-networks__icon" href={urlInstagram} target="_blank">
        <img src={IconInstagram} alt="" />
      </a>
      <a className="social-networks__icon" href={urltwitter} target="_blank">
        <img src={IconTwitter} alt="" />
      </a>
    </div>
  );
};

export default SocialNetworks;
