// Download Handlers
// - user action (click)
// - secondary action (user selects file type)
// - expected behaviour (the document is SAVED locally to the user's computer with the selected file type)

import { saveAs } from 'file-saver' 
import { jsPDF } from "jspdf";


export function handleDownload(fileTextData, fileName = 'Pathfinder_download', fileType){

    switch (fileType){
        case 'pdf': 
        {
            const doc = new jsPDF();
            doc.text(fileTextData, 20, 20);
            doc.save(`${fileName}.pdf`);
            break
        }

        case 'csv':
        {
            const fileData = new Blob([fileTextData], {type: "text/csv;charset=utf-8"});
            saveAs(fileData, `${fileName}.csv`);
        }

        case 'txt': 
        {
            const fileData = new Blob([fileTextData], {type: "text/plain;charset=utf-8"});
            saveAs(fileData, `${fileName}.txt`);
            break
        }

        default: 
        {
            const doc = new jsPDF();
            doc.text(fileTextData, 20, 20);
            doc.save(`${fileName}.pdf`);
        }

    }

}


// component that I accidentally made whoops
// export function downloadForm(modifiedText) {
//     const [ downloadObject, setDownloadObject ] = useState({
//         fileName: '',
//         fileType: '',
//         fileData: modifiedText
//     })

//     function handleChange(e){
//         e.preventDefault()

//         setDownloadObject({
//             ...downloadObject,
//             [e.target.name]: e.target.value
//         })
//     }

//     function handleDownload(text) {
//         const doc = new jsPDF();
//         doc.text(text, 20, 20);
//         doc.save("PathFinder_download.pdf");
//     };

//     return (
//         <>
//         <form onSubmit={() => handleDownload(downloadObject)}>
//             <fieldset>
//             <legend>Please select which file type to download:</legend>
//             <div>
//                 <input
//                 type="radio"
//                 id="fileType1"
//                 name="fileType"
//                 value="pdf"
//                 checked
//                 onChange={handleChange}
//                 />
//                 <label for="fileType1">PDF</label>

//                 <input
//                 type="radio"
//                 id="fileType2"
//                 name="fileType"
//                 value="csv"
//                 onChange={handleChange}
//                 />
//                 <label for="fileType2">CSV</label>

//                 <input
//                 type="radio"
//                 id="fileType3"
//                 name="fileType"
//                 value="txt"
//                 onChange={handleChange}
//                 />
//                 <label for="fileType3">TXT</label>
//             </div>
//             </fieldset>

//             <fieldset>
//             <legend>
//                 <label for="fileName">Enter file name (4 to 8 characters):</label>
//             </legend>

//             <input
//                 type="text"
//                 id="fileName"
//                 name="fileName"
//                 value={downloadObject.fileName}
//                 required
//                 minlength="4"
//                 maxlength="8"
//                 size="10"
//                 onChange={handleChange}
//             />
//             </fieldset>

//             <div>
//             <button type="submit">Submit</button>
//             </div>
//         </form>
//         </>
//     );
// }
