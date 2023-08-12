// import React from "react";
import IconArrow from "../../assets/Icons/IconArrow.png";
import DocumentPdf from "../../assets/PDF/Document.pdf";
import "./styles.css";

const Link = () => {
  const documentPdfUrl = DocumentPdf;
  return (
    <div className="link-wrap">
      <a className="link-wrap__text text-m" href={documentPdfUrl} download>
        Descargar Resumen
      </a>
      <img className="link-wrap__image" src={IconArrow} alt="icono" />
    </div>
  );
};

export default Link;
