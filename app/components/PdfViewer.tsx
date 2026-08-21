"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(800);

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth - 20;
      setPageWidth(Math.min(width, 1000));
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div className="pdf-viewer">
      <Document
        file="/carta.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<p className="loading">Cargando carta...</p>}
        error={
          <p className="loading">
            No se pudo cargar la carta.
          </p>
        }
      >
        {Array.from({ length: numPages }, (_, index) => (
          <div
            key={`page_${index + 1}`}
            className="pdf-page-wrapper"
          >
            <Page
              pageNumber={index + 1}
              width={pageWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="pdf-page"
            />
          </div>
        ))}
      </Document>
    </div>
  );
}