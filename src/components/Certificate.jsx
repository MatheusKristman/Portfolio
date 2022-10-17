import React from "react";
import "./Certificate.css";
import CertificateItems from "./CertificateItems";

function Certificate() {
  return (
    <div className="certificate-container">
      <div className="certificate-wrapper">
        <div className="certificate-tag">
          <span>{"</Certificados>"}</span>
        </div>
        <CertificateItems />
      </div>
    </div>
  );
}

export default Certificate;
