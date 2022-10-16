// Download Handlers
// - user action (click)
// - secondary action (user selects file type)
// - expected behaviour (the document is SAVED locally to the user's computer with the selected file type)

// import FileSaver from 'file-saver' -- does not convert content content (e.g pdf)
import { jsPDF } from 'jspdf'

export default function handleDownload(text){

    const doc = new jsPDF()
    doc.text(text, 20, 20)
    doc.save("PathFinder_download.pdf")

}