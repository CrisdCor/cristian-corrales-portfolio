import SummaryCV from "../../assets/PDF/SummaryCV.pdf";
import "./styles.css";

const SummaryDownload = () => {
  return (
    <div className="summary-download">
        <a className="summary-download--link text-lg text-right" href={SummaryCV} target="_blank">Descargar resumen</a>
    </div>

  );
};

export default SummaryDownload;
