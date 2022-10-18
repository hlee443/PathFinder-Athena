import { useState } from 'react'


export default function Upload(){
    const [uploadedFile, setUploadedFile] = useState({
        fileName: '',
        fileType: ''
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
        console.log('EVENT', e.target.files)
        const selectedFile = e.target.files[0]

        uploadedFile.fileName = selectedFile.name
        uploadedFile.fileContent = selectedFile

        uploadedFile.fileType = uploadedFile.fileContent.slice((Math.max(0, uploadedFile.fileContent.lastIndexOf(".")) || Infinity) + 1)
       
        setFileNameForm(true)
       
    }

    function onFileUpload(e){
        // this is where we call the handler, pass the uploadFile Object
        // and do the following code in separate in a handler
        // handler will check what type of extention it is and onload depending on it

        const fileReader = new FileReader()
        fileReader.readAsText(inputtedFile[0])
        fileReader.onload = function (){
            setFileNameForm(false)
            setUploadedFile(fileReader.result)
        }

    }

    if(displayFileNameForm){
        return (
            <>
                <form onSubmit={() => onFileUpload()}> 
                {/* onSubmit call handler */}
                    <label for="uploadFileName">Enter the file Name</label>
                    <input type="text" name='fileName' value={uploadedFile.fileName}
                    onChange={handleChange}></input>
                    <button type="submit">Upload File</button>

                </form>

            </>
        )
    } else {
        return (
            <>
    
                <h1> Upload your document! </h1>
                
                <form>
                    <input id="fileInput" type="file" name="file" onChange={(e) => onFileSelect(e)} accept=".doc, .docx, .txt"/>
                </form>
    
                <br></br>
                <hr />
    

    
            </>
            
        )
    }
    

}