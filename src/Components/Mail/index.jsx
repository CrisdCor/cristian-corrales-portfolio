import Gmail from "../../assets/Icons/IconGmail.svg"
import "./styles.css";

const CopyMail = () => {
  //   const correoRef = useRef(null);

  //   const copiarCorreo = () => {
  //     if (correoRef.current) {
  //       correoRef.current.select();
  //       document.execCommand('copy');
  //     }
  //   };

  return (
    <button className="button-mail" >
      <img className="button-mail--image" src={Gmail} alt="" />
      <p className="button-mail--text text-m">Copiar correo</p>
    </button>
  );
};

export default CopyMail;
