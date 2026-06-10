import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/AdityaPalCv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import TerminalWindow from "../Terminal/TerminalWindow";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const wrapperRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(undefined);

  useEffect(() => {
    const updateWidth = () => {
      if (wrapperRef.current) {
        setPageWidth(wrapperRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <h1 className="section-heading">
                <span className="terminal-prompt">$</span> open{" "}
                <span className="purple">resume.pdf</span>
              </h1>
              <TerminalWindow
                title="AdityaPal_Resume.pdf"
                className="resume-terminal"
              >
                <div className="resume-pdf-wrapper" ref={wrapperRef}>
                  <Document file={pdf}>
                    <Page pageNumber={1} width={pageWidth} />
                  </Document>
                </div>
                <Row style={{ justifyContent: "center" }}>
                  <Button
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: "250px" }}
                  >
                    <AiOutlineDownload />
                    &nbsp;Download CV
                  </Button>
                </Row>
              </TerminalWindow>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
