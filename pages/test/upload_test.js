import { useState } from 'react'
import * as mainHandler from '../../handlers/main'


export default function Upload(){
    const [uploadedFile, setUploadedFile] = useState({
        fileObj: {},
        fileName: '',
        fileType: '',
        fileContent: ''
    })
    const [displayFileNameForm, setFileNameForm] = useState(false)

    function handleChange(e){
        e.preventDefault()

        setUploadedFile({
            ...uploadedFile,
            [e.target.name]: e.target.value
        })
    }

    function onFileSelect(e){

        const selectedFile = e.target.files[0]

        uploadedFile.fileName = selectedFile.name.split(".")[0]
        uploadedFile.fileType = selectedFile.name.slice((Math.max(0, selectedFile.name.lastIndexOf(".")) || Infinity) + 1)
        uploadedFile.fileObj = selectedFile

        setFileNameForm(true)
       
    }

    function onFileUpload(e){
        e.preventDefault()

        mainHandler.handleUpload(uploadedFile, (readFileContent) => {
            uploadedFile.fileContent = readFileContent
            setFileNameForm(false)
        })

    }

    if(displayFileNameForm){
        return (
          <>
            <form>
              <label htmlFor="uploadFileName">Enter the file Name</label>
              <input
                type="text"
                name="fileName"
                value={uploadedFile.fileName}
                onChange={handleChange}
              ></input>
              <button onClick={(e) => onFileUpload(e)}>Upload File</button>
            </form>
          </>
        );
    } else {


        if(uploadedFile.fileContent){
            return (
                <>
                        <h1>{uploadedFile.fileName}</h1>
                        <p className="fileOutput__container"> {uploadedFile.fileContent}</p>
                </>
            )
        } else {
            return (
                <>
                <h1> Upload your document! </h1>
                
                <form>
                    <input id="fileInput" type="file" name="file" onChange={(e) => onFileSelect(e)} accept=".txt"/>
                </form>
                </>
            )
        }
    }
    

}