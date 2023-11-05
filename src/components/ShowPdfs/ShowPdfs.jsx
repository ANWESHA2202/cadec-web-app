import { Document, Page, pdfjs } from "react-pdf";
import './showPdfs.css'
import whiteEye from '../../assets/white-eye.png'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ShowPdfs = ({ mostViewed }) => {
  return (
    <div className="m-8 mt-4 ml-0">
      <div
        className="flex gap-5 overflow-x-auto overflow-y-hidden"
        style={{ whiteSpace: "nowrap" }}
      >
        {mostViewed?.map((pdf, index) => (
          <div
            key={index}
            className="inline-block pdf-container"
            style={{ width: "200px", minWidth: "200px",height:'220px' }}
          >
            <Document file={pdf?.pdf_file}>
              <Page pageNumber={1} width={200} height={200} />
            </Document>
            <div className="pdf-overlay">
                <span>{pdf?.title}</span>
                <div className="flex items-center gap-3">
                    <span>
                        <img src={whiteEye} width={21} height={21}/>
                    </span>
                    <span>{pdf?.visit_count||0}</span>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowPdfs;
