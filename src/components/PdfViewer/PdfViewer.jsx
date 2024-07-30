import React from "react";
import { Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GetAppIcon from "@mui/icons-material/GetApp";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../PdfViewer/PdfViewer.css";

const PdfViewer = () => {
  const pdfUrl = "/file.pdf"; // replace with your PDF file path

  const handleViewPdf = () => {
    window.open(pdfUrl, "_blank");
  };

  const handleDownloadPdf = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Sample_Agreement_Prodapt.pdf"); // or any other file name you want to use
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <div className="download_main">
      <div className="download_main_left">
        <FontAwesomeIcon icon={faFilePdf} />
      </div>
      <div className="download_main_center">Sample_Agreement_Prodapt.pdf</div>
      <div className="download_main_right">
        <div>
          <Button
            startIcon={<VisibilityIcon />}
            onClick={handleViewPdf}
            style={{
              color: "#f60923",
            }}
          ></Button>
        </div>
        <div>
          <Button
            startIcon={<GetAppIcon />}
            onClick={handleDownloadPdf}
            style={{
              color: "#f60923",
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
