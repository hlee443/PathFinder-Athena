import { useState } from 'react'
import {handleUpload} from '../../handlers/main'


export default function Upload(){
    const [uploadedFile, setUploadedFile] = useState({
        fileObj: {},
        fileName: '',
        fileType: '',
        fileContent: ''
    })
    const [displayFileNameForm, setFileNameForm] = useState(false)
    const renderedFileContent = ''

    function handleChange(e){
        e.preventDefault()

        setUploadedFile({
            ...uploadedFile,
            [e.target.name]: e.target.value
        })
    }

    function onFileSelect(e){

        const selectedFile = e.target.files[0]

        uploadedFile.fileName = selectedFile.name
        uploadedFile.fileObj = selectedFile

        uploadedFile.fileExtension = uploadedFile.fileContent.slice((Math.max(0, uploadedFile.fileContent.lastIndexOf(".")) || Infinity) + 1)
       
        setFileNameForm(true)
       
    }

    function onFileUpload(e){
        e.preventDefault()


        const renderedFile = handleUpload(uploadedFile)

        // setUploadedFile({
        //     []
        // })

    }

    if(displayFileNameForm){
        return (
            <>
                <form> 
                    <label htmlFor="uploadFileName">Enter the file Name</label>
                    <input type="text" name='fileName' value={uploadedFile.fileName}
                    onChange={handleChange}></input>
                    <button onClick={(e) => onFileUpload(e)}>Upload File</button>

                </form>

            </>
        )
    } else {


        if(uploadedFile.fileContent){
            return (
                <>
                        {console.log("TEXT", uploadedFile.fileContent)}
                        <h1>{uploadedFile.fileName}</h1>
                        <p className="fileOutput__container"> {uploadedFile.fileContent}</p>
                </>
            )
        } else {
            return (
                <>
                <h1> Upload your document! </h1>
                
                <form>
                    <input id="fileInput" type="file" name="file" onChange={(e) => onFileSelect(e)} accept=".doc, .docx, .txt"/>
                </form>
                </>
            )
        }
    }
    

}