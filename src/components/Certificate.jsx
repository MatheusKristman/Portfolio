import React, { useContext, useLayoutEffect, useEffect, useRef } from "react";
import CertificateItems from "./CertificateItems";
import { context } from "../App";
import { useInView } from "react-intersection-observer";
import "./Certificate.css";

function Certificate() {
  const certificateRef = useRef();
  const certificateTitle = useRef();

  const { setCertificateRef } = useContext(context);

  const { ref: ref, inView: isCertificateVisible } = useInView();

  useLayoutEffect(() => {
    setCertificateRef(certificateRef.current.offsetTop);
  }, []);

  useEffect(() => {
    if (isCertificateVisible) {
      certificateTitle.current.style.animation = "certificateSlideRight 1.5s ease-in-out forwards";
    } else {
      certificateTitle.current.style.animation = "certificateSlideLeft 1s ease-in-out forwards";
    }
  }, [isCertificateVisible]);

  return (
    <div ref={certificateRef} className="certificate-container">
      <div ref={ref} className="certificate-wrapper">
        <div ref={certificateTitle} className="certificate-tag">
          <span>{"</Certificados>"}</span>
        </div>
        <CertificateItems />
      </div>
    </div>
  );
}

export default Certificate;
