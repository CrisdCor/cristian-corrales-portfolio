import IconGithub from "../../assets/Icons/IconGithub.svg";
import IconInstagram from "../../assets/Icons/IconInstagram.svg";
import IconTwitter from "../../assets/Icons/IconTwitter.svg";
import "./styles.css";

const SocialNetworks =() =>{
    return(
        <div className="social-networks">
            <figure className="social-networks__icon">
                <img src={IconGithub} alt="" />
            </figure>
            <figure className="social-networks__icon">
                <img src={IconInstagram} alt="" />
            </figure>
            <figure className="social-networks__icon">
                <img src={IconTwitter} alt="" />
            </figure>
        </div>
    )
}

export default SocialNetworks;