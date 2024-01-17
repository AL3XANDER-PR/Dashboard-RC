import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { FileLoading } from "./FileLoading";
// import Modal from "./Modal";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
function ViewPdf({ id, url_format }) {
  // console.log({ id, url_format });
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [pdf, setPdf] = useState(url_format);

  function onDocumentLoadSuccess({ numPages }) {
    // console.log("aqui");
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i) ||
      window.innerWidth <= 780
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    // console.log("aqui");

    // setTimeout(() => {
    //   // setPdf("http://192.168.1.113:3007/file-1705388154847.pdf");
    //   setPdf(url_format);
    // }, 3000);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center border  rounded-md min-h-96 relative">
      {/* <h1>{id}</h1> */}
      {/* <header className="bg-blue-500 flex flex-col items-center justify-center "> */}
      {/* {<FileLoading />} */}

      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        // className={"relative"}
        renderMode="canvas"
        noData={""}
        // onLoadProgress={"asdasd"}
        loading={<FileLoading />}
      >
        <Page
          pageNumber={pageNumber}
          className={""}
          // object-fit="fill"
          width={isMobile ? 350 : 500}
          // width={"500"}
          // scale={0.5}
        />
      </Document>

      {/* <p>
        {" "}
        Page {pageNumber} of {numPages}
      </p>
      {pageNumber > 1 && (
        <button onClick={changePageBack}>Previous Page</button>
      )}
      {pageNumber < numPages && (
        <button onClick={changePageNext}>Next Page</button>
      )} */}
      {/* </header> */}
      {/* <center>
        <div>
          <Document
            file="http://localhost:3007/file-1705388718969.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </center> */}

      {/* <Modal id={60} /> */}
    </div>
  );
}

export default ViewPdf;
