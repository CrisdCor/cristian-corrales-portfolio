import SummaryCV from "../../assets/PDF/SummaryCV.pdf";
import IconArrow from "../../assets/Icons/IconArrow.png";
import "./styles.css";

const SummaryDownload = () => {
  return (
    <footer className="footer">
      <div className="summary-download">
        <a
          className="summary-download__link text-m text-right"
          href={SummaryCV}
          target="_blank"
        >
          Descargar resumen
        </a>
        {/* <img className="summary-download__icon" src={IconArrow} alt="arrow right" /> */}
        <figure className="summary-download__icon">
          <img src={IconArrow} alt="" />
        </figure>
      </div>
    </footer>
  );
};

export default SummaryDownload;
